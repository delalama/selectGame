import {
    animate,
    state,
    style,
    transition,
    trigger,
  } from '@angular/animations';
  
  
  export const squash = trigger('squash', [
    state('*', style({
      'text-transform': 'uppercase',
    })),
  
    transition(':increment', [
      animate('100ms', style({
        color: 'green',
        transform: 'scale(1.3, 1.2)',
      })),
      animate('100ms', style({
        color: 'green',
        transform: 'scale(1.2, 1.2)',
      })),
      animate('300ms'),
    ]),
  
    transition(':decrement', [
      animate('100ms', style({
        color: 'red',
        transform: 'scale(0.8, 0.9)',
      })),
      animate('100ms', style({
        color: 'red',
        transform: 'scale(0.9, 0.9)',
      })),
      animate('300ms'),
    ]),
  ]);