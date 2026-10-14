import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';
import { readStorage, writeStorage } from './storage';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly systemDark = this.document.defaultView?.matchMedia?.('(prefers-color-scheme: dark)');

  readonly theme = signal<Theme>(
    this.document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  );

  constructor() {
    effect(() => {
      const isDark = this.theme() === 'dark';
      this.document.documentElement.classList.toggle('dark', isDark);
      this.document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', isDark ? '#060e12' : '#f5f7f6');
    });

    this.systemDark?.addEventListener('change', (event) => {
      if (!readStorage(STORAGE_KEY)) {
        this.theme.set(event.matches ? 'dark' : 'light');
      }
    });
  }

  toggle(): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(next);
    writeStorage(STORAGE_KEY, next);
  }
}
