import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
    TestBed.resetTestingModule();
  });

  it('should start with the light theme when the page has no dark class', () => {
    const service = TestBed.inject(ThemeService);

    expect(service.theme()).toBe('light');
  });

  it('should switch to dark and add the dark class to <html>', () => {
    const service = TestBed.inject(ThemeService);

    service.toggle();
    TestBed.tick();

    expect(service.theme()).toBe('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should save the chosen theme', () => {
    const service = TestBed.inject(ThemeService);

    service.toggle();

    expect(localStorage.getItem('theme')).toBe('dark');
  });
});
