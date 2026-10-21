import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from './core/i18n.service';
import { About } from './sections/about/about';
import { Hero } from './sections/hero/hero';
import { Navbar } from './sections/navbar/navbar';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Navbar, Hero, About, Skills, Projects],
  templateUrl: './app.html',
})
export class App {
  protected readonly t = inject(I18nService).t;
}
