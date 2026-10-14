import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import { I18nService } from '../../core/i18n.service';
import { ThemeService } from '../../core/theme.service';
import { Translations } from '../../core/translations';
import { Icon } from '../../shared/icon';

type SectionId = 'home' | 'about' | 'skills' | 'projects' | 'contact';

interface NavLink {
  id: SectionId;
  label: keyof Translations['nav'];
}

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './navbar.html',
  host: { '(document:keydown.escape)': 'closeMenu()' },
})
export class Navbar {
  private readonly document = inject(DOCUMENT);
  private readonly i18n = inject(I18nService);
  protected readonly theme = inject(ThemeService);

  protected readonly t = this.i18n.t;
  protected readonly lang = this.i18n.lang;

  protected readonly links: NavLink[] = [
    { id: 'home', label: 'home' },
    { id: 'about', label: 'about' },
    { id: 'skills', label: 'skills' },
    { id: 'projects', label: 'projects' },
    { id: 'contact', label: 'contact' },
  ];

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly activeSection = signal<SectionId>('home');
  protected readonly solid = computed(() => this.scrolled() || this.menuOpen());

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const win = this.document.defaultView;
      if (!win) return;

      const onScroll = () => this.scrolled.set(win.scrollY > 8);
      onScroll();
      win.addEventListener('scroll', onScroll, { passive: true });
      destroyRef.onDestroy(() => win.removeEventListener('scroll', onScroll));

      this.observeSections(destroyRef);
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected toggleLang(): void {
    this.i18n.toggle();
  }

  private observeSections(destroyRef: DestroyRef): void {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id as SectionId);
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    for (const link of this.links) {
      const section = this.document.getElementById(link.id);
      if (section) observer.observe(section);
    }
    destroyRef.onDestroy(() => observer.disconnect());
  }
}
