import Particle1 from '../assets//particles/confetti/particle1.svg'
import Particle2 from '../assets//particles/confetti/particle2.svg'
import Particle3 from '../assets//particles/confetti/particle3.svg'
import Particle4 from '../assets//particles/confetti/particle4.svg'
import Particle5 from '../assets//particles/confetti/particle5.svg'
import Particle6 from '../assets//particles/confetti/particle6.svg'

export const confettiOptions = {
  fullScreen: {
    enable: false
  },
  particles: {
    size: {
      value: 10
    },
    bounce: {
      horizontal: {
        value: 0
      },
      vertical: {
        value: 0
      }
    },
    color: {
      value: ['#1E00FF', '#FF0061', '#E1FF00', '#00FF9E'],
      animation: {
        h: {
          enable: true,
          speed: 30
        }
      }
    },
    move: {
      decay: 0.1,
      direction: 'top',
      enable: true,
      gravity: {
        enable: true,
        maxSpeed: 200
      },
      outModes: {
        default: 'destroy',
        bottom: 'destroy',
        left: 'destroy',
        right: 'destroy',
        top: 'destroy'
      },
      speed: {
        min: 50,
        max: 100
      }
    },
    number: {
      limit: 300,
      value: 0
    },
    opacity: {
      animation: {
        speed: 0.3,
        sync: true,
        destroy: 'min',
        startValue: 'max'
      }
    },

    rotate: {
      value: {
        min: 0,
        max: 360
      },
      animation: {
        enable: true,
        speed: 60
      },
      direction: 'random'
    },
    shape: {
      options: {
        polygon: [
          {
            sides: 5
          },
          {
            sides: 6
          }
        ],
        character: [
          {
            value: ['💩', '🤡', '🍀', '🍙']
          }
        ]
      },
      type: ['image', 'image', 'image', 'image', 'image', 'image'],
      image: [
        { src: Particle1 },
        { src: Particle2 },
        { src: Particle3 },
        { src: Particle4 },
        { src: Particle5 },
        { src: Particle6 }
      ]
    },

    wobble: {
      distance: 30,
      enable: true,
      speed: {
        min: -15,
        max: 15
      }
    }
  },
  emitters: [
    {
      autoPlay: true,
      // fill: true,
      life: {
        wait: false
      },
      rate: {
        quantity: 5,
        delay: 0.5
      },
      shape: 'square',
      startCount: 0,
      size: {
        mode: 'percent',
        height: 0,
        width: 0
      },
      position: {
        x: 0,
        y: 100
      }
    },
    {
      autoPlay: true,
      // fill: true,
      life: {
        wait: false
      },
      rate: {
        quantity: 5,
        delay: 0.5
      },
      shape: 'square',
      startCount: 0,
      size: {
        mode: 'percent',
        height: 0,
        width: 0
      },
      position: {
        x: 100,
        y: 100
      }
    }
  ]
}
