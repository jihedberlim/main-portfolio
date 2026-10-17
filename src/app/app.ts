import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from './core/i18n.service';
import { About } from './sections/about/about';
import { Hero } from './sections/hero/hero';
import { Navbar } from './sections/navbar/navbar';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Navbar, Hero, About],
  templateUrl: './app.html',
})
export class App {
  protected readonly t = inject(I18nService).t;
}
