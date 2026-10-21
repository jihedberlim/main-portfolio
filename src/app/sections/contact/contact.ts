import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { profile, whatsappLink } from '../../data/profile';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';
import { SocialLinks } from '../../shared/social-links';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, SocialLinks],
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly t = inject(I18nService).t;

  protected readonly email = profile.email;
  protected readonly year = new Date().getFullYear();
  protected readonly whatsapp = computed(() => whatsappLink(this.t().contact.whatsappMessage));
  protected readonly copied = signal(false);

  private resetTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.resetTimer));
  }

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
    } catch {
      return;
    }
    this.copied.set(true);
    clearTimeout(this.resetTimer);
    this.resetTimer = setTimeout(() => this.copied.set(false), 2000);
  }
}
