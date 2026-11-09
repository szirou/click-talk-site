// Retry occasional failed image requests without changing a gallery's selection.
(() => {
  const attempts = new WeakMap();
  document.addEventListener('error', event => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) || !image.getAttribute('src')) return;
    const original = image.getAttribute('src');
    const url = new URL(original, document.baseURI);
    if (!/^https?:$/.test(url.protocol) || url.origin !== location.origin) return;
    url.searchParams.delete('image_retry');
    const key = url.href;
    const previous = attempts.get(image);
    const count = previous?.key === key ? previous.count : 0;
    if (count >= 2) return;
    attempts.set(image, { key, count: count + 1 });
    setTimeout(() => {
      if (!image.isConnected || image.getAttribute('src') !== original) return;
      url.searchParams.set('image_retry', String(count + 1));
      image.src = url.href;
    }, 500 * (count + 1));
  }, true);
})();
