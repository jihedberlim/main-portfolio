import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { Translations } from '../../core/translations';
import { Icon, IconName } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/section-heading';

type FocusKey = keyof Translations['about']['focus'];

interface FocusItem {
  key: FocusKey;
  icon: IconName;
}

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal, SectionHeading],
  templateUrl: './about.html',
})
export class About {
  protected readonly t = inject(I18nService).t;

  protected readonly focusItems: FocusItem[] = [
    { key: 'frontend', icon: 'code' },
    { key: 'backend', icon: 'server' },
    { key: 'learning', icon: 'sparkles' },
  ];
}
