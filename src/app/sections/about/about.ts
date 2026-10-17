import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { Icon, IconName } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, SectionHeading],
  templateUrl: './about.html',
})
export class About {
  protected readonly t = inject(I18nService).t;

  protected readonly focusIcons: IconName[] = ['code', 'server', 'sparkles'];
}
