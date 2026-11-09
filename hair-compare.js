// A clipped overlay, not a resized image: both dashboards stay still as you drag.
(() => {
  document.querySelectorAll('[data-hair-compare]').forEach(root => {
    const stage = root.querySelector('[data-compare-stage]');
    const range = root.querySelector('[data-compare-range]');
    if (!stage || !range) return;
    let pointer = null;
    function render(value) {
      const numeric = Number(value);
      const position = Math.min(100, Math.max(0, Number.isFinite(numeric) ? numeric : 50));
      range.value = String(Math.round(position));
      stage.style.setProperty('--compare-position', position + '%');
      const zh = document.documentElement.lang.startsWith('zh');
      range.setAttribute('aria-valuetext', zh
        ? `4 月显示 ${Math.round(position)}%，9 月显示 ${100 - Math.round(position)}%`
        : `April ${Math.round(position)}% visible, September ${100 - Math.round(position)}% visible`);
    }
    function locate(event) {
      const box = stage.getBoundingClientRect();
      if (box.width > 0) render((event.clientX - box.left) / box.width * 100);
    }
    range.addEventListener('input', () => render(range.value));
    range.addEventListener('keydown', event => {
      const value = Number(range.value);
      const next = { ArrowLeft: value - 1, ArrowDown: value - 1, ArrowRight: value + 1, ArrowUp: value + 1, PageDown: value - 10, PageUp: value + 10, Home: 0, End: 100 }[event.key];
      if (next === undefined) return;
      event.preventDefault();
      event.stopPropagation();
      render(next);
    });
    stage.addEventListener('pointerdown', event => {
      if (!event.isPrimary || event.button !== 0 || pointer !== null) return;
      // Use the full image width, not the browser range thumb's inset track.
      // pan-y still permits normal vertical page scrolling on touch screens.
      if (event.cancelable) event.preventDefault();
      pointer = event.pointerId;
      stage.setPointerCapture(pointer);
      range.focus({ preventScroll: true });
      stage.classList.add('is-dragging');
      locate(event);
    });
    stage.addEventListener('pointermove', event => {
      if (event.pointerId === pointer) locate(event);
    });
    function release(event) {
      if (event.pointerId !== pointer) return;
      pointer = null;
      stage.classList.remove('is-dragging');
      if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
    }
    stage.addEventListener('pointerup', release);
    stage.addEventListener('pointercancel', release);
    stage.addEventListener('lostpointercapture', release);
    new MutationObserver(() => render(range.value)).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    render(range.value);
  });
})();
