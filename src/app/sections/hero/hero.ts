import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';
import { SocialLinks } from '../../shared/social-links';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, Icon, Reveal, SocialLinks],
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly t = inject(I18nService).t;
}
