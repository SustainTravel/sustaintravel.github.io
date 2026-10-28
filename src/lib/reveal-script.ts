/**
 * Inline <head> script for the on-scroll entrances (CSS in globals.css). It runs before first paint, so `.reveal`
 * elements are only hidden when this code is there to show them again: no JS, no IntersectionObserver or reduced
 * motion means no `data-reveal` on <html> and everything simply stays visible. One shared observer marks each
 * element `data-shown` once (then stops watching it); a MutationObserver picks up elements added later by client
 * navigation or the tour filter. Plain ES5 on purpose: it is not bundled or transpiled.
 */
export const revealScript = `(function () {
  var d = document.documentElement;
  if (!("IntersectionObserver" in window) || !("MutationObserver" in window)) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  d.setAttribute("data-reveal", "");
  var started = false;
  // Safety net: if the observer never reports, release everything instead of leaving content hidden.
  setTimeout(function () { if (!started) d.removeAttribute("data-reveal"); }, 3000);
  var show = function (el, delay) {
    io.unobserve(el);
    if (delay) el.style.animationDelay = delay + "ms";
    el.setAttribute("data-shown", "");
  };
  // The root reaches far above the viewport, so anything already scrolled past (anchor link, fast scroll, restored
  // scroll position) counts as in view too and is never left hidden above the visitor.
  var io = new IntersectionObserver(function (entries) {
    started = true;
    var n = 0;
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      // Elements arriving together cascade, 70ms apart, capped so a big batch never drags. Off-screen ones skip it.
      show(e.target, e.boundingClientRect.bottom < 0 ? 0 : Math.min(n++, 5) * 70);
    });
  }, { rootMargin: "100000px 0px -8% 0px" });
  var scan = function () {
    var list = d.querySelectorAll(".reveal:not([data-shown])");
    for (var i = 0; i < list.length; i++) io.observe(list[i]);
  };
  new MutationObserver(function (records) {
    for (var i = 0; i < records.length; i++)
      for (var j = 0; j < records[i].addedNodes.length; j++)
        if (records[i].addedNodes[j].nodeType === 1) return scan();
  }).observe(d, { childList: true, subtree: true });
})();`;
