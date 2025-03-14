export const particlesConfig = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#ffffff", "#87ceeb", "#add8e6", "#e6e6fa"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 1,
      random: false
    },
    size: {
      value: 3,
      random: true,
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 1,
        sync: false
      }
    },
    links: {
      enable: false
    },
    move: {
      enable: true,
      speed: 25,
      direction: "bottom-left",
      random: false,
      straight: true,
      outModes: {
        default: "out"
      },
      trail: {
        enable: true,
        length: 50,
        fill: {
          color: "#000000"
        }
      }
    },
    life: {
      duration: {
        value: 1.5,
        sync: false
      },
      count: 1
    },
    rotate: {
      value: {
        min: 0,
        max: 360
      },
      direction: "random",
      animation: {
        enable: true,
        speed: 5
      }
    },
    tilt: {
      direction: "random",
      enable: true,
      value: {
        min: 0,
        max: 360
      },
      animation: {
        enable: true,
        speed: 5
      }
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: false
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      push: {
        quantity: 3
      }
    }
  },
  background: {
    color: "transparent"
  },
  fullScreen: {
    enable: false,
    zIndex: 0
  },
  detectRetina: true
}; 