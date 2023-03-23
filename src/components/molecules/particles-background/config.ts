import { IOptions, RecursivePartial } from "tsparticles-engine";

export const config: RecursivePartial<IOptions> = {
  particles: {
    number: { value: 15, density: { enable: false, value_area: 315.65905665290904 } },
    color: { value: "#3399ff" },
    shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } },
    opacity: { value: 0.14993805191013182, random: true, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
    size: { value: 14, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
    line_linked: { enable: false, distance: 500, color: "#ffffff", opacity: 0.4, width: 2 },
    move: { enable: true, speed: 1, direction: "bottom-right", random: true, straight: true, out_mode: "bounce", bounce: false, attract: { enable: true, rotateX: 600, rotateY: 1200 } },
  },

  interactivity: {
    detect_on: "canvas",
    events: { onhover: { enable: true, mode: "bubble" }, onclick: { enable: true, mode: "repulse" }, resize: true },
    modes: { grab: { distance: 400, line_linked: { opacity: 0.5 } }, bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } },
  },
  retina_detect: true,
  fullScreen: false,
};
