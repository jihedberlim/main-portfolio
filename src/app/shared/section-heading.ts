import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Reveal } from './reveal';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal],
  template: `
    <div appReveal class="max-w-2xl">
      <p class="flex items-center gap-3 font-mono text-xs tracking-widest text-accent uppercase">
        <span>{{ eyebrow() }}</span>
      </p>
      <h2
        class="mt-4 font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl"
      >
        {{ title() }}
      </h2>
      @if (description()) {
        <p class="mt-4 text-base leading-relaxed text-muted sm:text-lg">{{ description() }}</p>
      }
    </div>
  `,
})
export class SectionHeading {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input<string>();
}
