import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { I18nService } from '../core/i18n.service';
import { socialLinks } from '../data/profile';
import { Icon } from './icon';

@Component({
  selector: 'app-social-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <ul class="flex flex-wrap items-center gap-3" [attr.aria-label]="t().a11y.socials">
      @for (link of links(); track link.label) {
        <li>
          <a
            [href]="link.href"
            target="_blank"
            rel="noopener noreferrer"
            [attr.aria-label]="link.label"
            [attr.title]="link.label"
            class="grid size-11 place-items-center rounded-full border border-line bg-card text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <app-icon [name]="link.icon" class="size-[18px]" />
          </a>
        </li>
      }
    </ul>
  `,
})
export class SocialLinks {
  protected readonly t = inject(I18nService).t;
  protected readonly links = computed(() => socialLinks(this.t().contact.whatsappMessage));
}
