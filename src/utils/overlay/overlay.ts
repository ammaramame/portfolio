export const Overlay = {
  show: (id?: string) => {
    if (!document.querySelector("#overlay")) {
      const overlay = document.createElement("div");

      overlay.classList.add("uk-overlay-primary", "opacity-half", "uk-position-cover", "uk-position-fixed", "uk-position-z-index");
      overlay.id = "overlay";
      document.getElementById(id ?? "root")?.append(overlay);
    }
  },

  hide: () => document.getElementById("overlay")?.remove(),
};
