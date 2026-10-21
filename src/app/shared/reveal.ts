import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[style.transition-delay.ms]': 'appRevealDelay()',
  },
})
export class Reveal {
  readonly appRevealDelay = input(0);

  constructor() {
    const element: HTMLElement = inject(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') {
        element.classList.add('is-visible');
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add('is-visible');
            observer.disconnect();
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      );
      observer.observe(element);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
