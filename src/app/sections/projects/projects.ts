import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, Icon, Reveal, SectionHeading],
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly i18n = inject(I18nService);
  protected readonly t = this.i18n.t;

  protected readonly projects = projects;
  protected readonly githubUrl = profile.github;
}
