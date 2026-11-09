// Adapted from the user-supplied React Bits InfiniteSpiral component.
// Retains its helix geometry, depth scaling, edge fade and eased movement.
(() => {
  const root = document.querySelector('[data-infinite-spiral]');
  if (!root) return;
  const cards = [...root.querySelectorAll('.infinite-spiral__item')];
  if (!cards.length) return;
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const modulo = (value, divisor) => ((value % divisor) + divisor) % divisor;
  const smoothstep = (min, max, value) => {
    const x = clamp((value - min) / (max - min || 1), 0, 1);
    return x * x * (3 - 2 * x);
  };
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  // Preserve the original 12-card helix footprint, with more photos inside it.
  const speed = 0.35, spacing = 60, cardWidth = 116, cardHeight = 140;
  const perspective = 1075, rotation = -18, centerScale = 1.16, edgeFade = 0.44, edgeBlur = 6.75;
  let progress = 0, target = 0, autoSpeed = 0;
  // Read-only animation bridge for the background; no change to gallery motion.
  const sharedMotion = { progress: 0 };
  root.clickTalkSpiralState = sharedMotion;
  let hovered = false, visible = false, focused = false, pointerId = null;
  let lastY = 0, lastScrollY = window.scrollY;
  let bounds = root.getBoundingClientRect();
  let previousTime = performance.now(), frame = 0;

  function paint() {
    sharedMotion.progress = progress;
    const half = cards.length / 2;
    const density = 12 / cards.length;
    const width = Math.max(bounds.width, 1), height = Math.max(bounds.height, 1);
    const fit = Math.min(1, width / (cardWidth * 2.8), height / (cardHeight * 2.35));
    const radius = Math.min(350, Math.max(72, width * 0.36)) * fit;
    cards.forEach((card, index) => {
      const offset = (modulo(index - progress + half, cards.length) - half) * density;
      const edge = Math.min(Math.abs(offset) / 6, 1);
      const opacity = 1 - smoothstep(1 - edgeFade, 1, edge);
      const focus = 1 - Math.min(Math.abs(offset) / (7 * 0.65), 1);
      const angle = (offset * (360 / 7) + rotation) * Math.PI / 180;
      const x = Math.sin(angle) * radius, z = Math.cos(angle) * radius;
      const scale = (1 + (centerScale - 1) * focus) * fit * clamp(perspective / Math.max(perspective - z, 1), 0.72, 1.45);
      const depth = (z / Math.max(radius, 1) + 1) / 2;
      const blur = edgeBlur * smoothstep(0.35, 1, edge);
      card.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${offset * spacing * fit}px, 0) scale(${scale})`;
      card.style.opacity = opacity.toFixed(3);
      card.style.filter = blur > 0.01 ? `blur(${blur.toFixed(2)}px)` : 'none';
      card.style.zIndex = String(Math.round(depth * 100000) + index);
      card.style.pointerEvents = opacity > 0.25 ? 'auto' : 'none';
    });
  }
  function animate(time) {
    frame = 0;
    const delta = Math.min((time - previousTime) / 1000, 0.05);
    previousTime = time;
    const desired = visible && !motion.matches && !hovered && !focused && pointerId === null ? speed : 0;
    autoSpeed += (desired - autoSpeed) * (1 - Math.exp(-delta * 7));
    target += autoSpeed * delta * (cards.length / 12);
    progress += (target - progress) * (1 - Math.exp(-delta * (pointerId !== null ? 22 : 11)));
    paint();
    if (visible && !document.hidden) frame = requestAnimationFrame(animate);
  }
  function start() {
    if (frame || !visible || document.hidden) return;
    previousTime = performance.now();
    frame = requestAnimationFrame(animate);
  }
  new ResizeObserver(() => { bounds = root.getBoundingClientRect(); paint(); }).observe(root);
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
    else { cancelAnimationFrame(frame); frame = 0; }
  }, { threshold: 0.02 }).observe(root);
  root.addEventListener('mouseenter', () => { hovered = true; });
  root.addEventListener('mouseleave', () => { hovered = false; });
  root.addEventListener('focusin', () => { focused = true; });
  root.addEventListener('focusout', () => { focused = false; });
  root.addEventListener('pointerdown', (event) => {
    if (!event.isPrimary || event.button !== 0) return;
    pointerId = event.pointerId;
    lastY = event.clientY;
    target = progress;
    root.setPointerCapture(pointerId);
    root.classList.add('is-dragging');
  });
  root.addEventListener('pointermove', (event) => {
    if (event.pointerId !== pointerId) return;
    target -= (event.clientY - lastY) / spacing * (cards.length / 12);
    lastY = event.clientY;
  });
  function release(event) {
    if (event.pointerId !== pointerId) return;
    pointerId = null;
    root.classList.remove('is-dragging');
    if (root.hasPointerCapture(event.pointerId)) root.releasePointerCapture(event.pointerId);
  }
  root.addEventListener('pointerup', release);
  root.addEventListener('pointercancel', release);
  root.addEventListener('lostpointercapture', release);
  root.addEventListener('keydown', (event) => {
    if (!['ArrowDown', 'ArrowUp'].includes(event.key)) return;
    event.preventDefault();
    target += event.key === 'ArrowDown' ? 1 : -1;
  });
  window.addEventListener('scroll', () => {
    const delta = window.scrollY - lastScrollY;
    lastScrollY = window.scrollY;
    if (visible && !motion.matches) target += clamp(delta * (speed / 0.55) / (spacing * 2), -1.5, 1.5) * (cards.length / 12);
  }, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(frame); frame = 0; }
    else start();
  });
  window.addEventListener('pagehide', () => { cancelAnimationFrame(frame); frame = 0; });
  window.addEventListener('pageshow', start);
  paint();
})();
