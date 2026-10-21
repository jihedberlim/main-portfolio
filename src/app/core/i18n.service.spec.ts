import { TestBed } from '@angular/core/testing';
import { I18nService } from './i18n.service';

describe('I18nService', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
  });

  it('should use the language saved by the visitor', () => {
    localStorage.setItem('lang', 'en');

    const service = TestBed.inject(I18nService);

    expect(service.lang()).toBe('en');
  });

  it('should toggle between pt and en and save the choice', () => {
    localStorage.setItem('lang', 'pt');
    const service = TestBed.inject(I18nService);

    service.toggle();

    expect(service.lang()).toBe('en');
    expect(localStorage.getItem('lang')).toBe('en');
  });

  it('should pick the text of the current language', () => {
    localStorage.setItem('lang', 'pt');
    const service = TestBed.inject(I18nService);
    const text = { pt: 'Olá', en: 'Hello' };

    expect(service.pick(text)).toBe('Olá');

    service.toggle();

    expect(service.pick(text)).toBe('Hello');
  });

  it('should update the page title when the language changes', () => {
    localStorage.setItem('lang', 'pt');
    const service = TestBed.inject(I18nService);
    TestBed.tick();
    expect(document.title).toContain('Desenvolvedor');

    service.toggle();
    TestBed.tick();

    expect(document.title).toContain('Developer');
  });
});
