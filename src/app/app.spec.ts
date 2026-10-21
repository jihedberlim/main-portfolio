import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { I18nService } from './core/i18n.service';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the name in the hero title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Jihed Berlim');
  });

  it('should switch the texts when the language changes', async () => {
    const fixture = TestBed.createComponent(App);
    const i18n = TestBed.inject(I18nService);

    i18n.lang.set('pt');
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#about h2')?.textContent).toContain('Quem sou eu?');

    i18n.lang.set('en');
    await fixture.whenStable();
    expect(compiled.querySelector('#about h2')?.textContent).toContain('Who am I?');
  });
});
