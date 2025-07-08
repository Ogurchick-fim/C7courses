export function createGlobe() {
  if (typeof window === "undefined") return;

  // @ts-ignore
  import("https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.7/dat.gui.min.js");
  // @ts-ignore
  import("https://cdnjs.cloudflare.com/ajax/libs/stats.js/r17/Stats.min.js");
  // @ts-ignore
  import("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js");

  // Make sure these global scripts (like PerspectiveTransform) are loaded too
  // Either add via <script> in index.html or import their ES modules if available

  // @ts-ignore
  window.initGlobe?.(); // Call global init (see below for how to expose it)
}   