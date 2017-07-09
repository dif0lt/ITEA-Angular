import { trigger, state, style, animate, transition } from '@angular/animations'

export namespace Animations {
  export const FLY_IN_OUT: any = trigger("flyInOut", [
    state ("inactive", style({
      transform: 'translateX(0)'
    })),
    transition('void => *', [
      style ({
        transform: 'translateX(-100%)'
      }),
      animate('600ms ease-in', style({
        backgroundColor: '#eee',
        transform: 'translateX(0%)'
      }))
    ]),
  ]);

  export const USER_STATE: any = trigger("userState", [
    state ("inactive", style({
        backgroundColor: "#eee",
        transform: "scale(1)"
    })),
    state ("active",   style({
        backgroundColor: "#fdcd3d",
        transform: "scale(1)"
    })),
      transition ('inactive => active, active => inactive', [
        style ({
          backgroundColor: '#eee',
        }),
        animate ('250ms ease-in', style({
          backgroundColor: '#eee',
          transform: 'rotateX(90deg)'
        })),
        animate ('250ms ease-in', style({
          backgroundColor: '#fdcd3d',
          transform: 'rotateX(0deg)'
        }))
      ]),
  ])
}
