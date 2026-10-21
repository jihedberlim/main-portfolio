import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { readStorage, writeStorage } from './storage';
import { Lang, Localized, translations } from './translations';

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly lang = signal<Lang>(this.initialLang());
  readonly t = computed(() => translations[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      const t = this.t();
      this.document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
      this.title.setTitle(t.meta.title);
      this.meta.updateTag({ name: 'description', content: t.meta.description });
    });
  }

  toggle(): void {
    const next: Lang = this.lang() === 'pt' ? 'en' : 'pt';
    this.lang.set(next);
    writeStorage(STORAGE_KEY, next);
  }

  pick(value: Localized): string {
    return value[this.lang()];
  }

  private initialLang(): Lang {
    const stored = readStorage(STORAGE_KEY);
    if (stored === 'pt' || stored === 'en') {
      return stored;
    }
    const browserLang = this.document.defaultView?.navigator.language ?? 'pt';
    return browserLang.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }
}
