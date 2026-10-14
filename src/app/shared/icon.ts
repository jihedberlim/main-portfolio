import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

type Shape =
  | { kind: 'path'; d: string }
  | { kind: 'circle'; cx: number; cy: number; r: number }
  | { kind: 'rect'; x: number; y: number; width: number; height: number; rx: number };

interface IconDef {
  viewBox: string;
  /** `stroke` = ícones de linha (Lucide); `fill` = logos de marca (Font Awesome). */
  style: 'stroke' | 'fill';
  shapes: Shape[];
}

const path = (d: string): Shape => ({ kind: 'path', d });

// Ícones de interface: Lucide (ISC License) — https://lucide.dev
// Ícones de marca: Font Awesome Free 7 (CC BY 4.0) — https://fontawesome.com/license/free
const icons = {
  sun: {
    viewBox: '0 0 24 24',
    style: 'stroke',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 4 },
      path('M12 2v2'),
      path('M12 20v2'),
      path('m4.93 4.93 1.41 1.41'),
      path('m17.66 17.66 1.41 1.41'),
      path('M2 12h2'),
      path('M20 12h2'),
      path('m6.34 17.66-1.41 1.41'),
      path('m19.07 4.93-1.41 1.41'),
    ],
  },
  moon: {
    viewBox: '0 0 24 24',
    style: 'stroke',
    shapes: [
      path(
        'M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401',
      ),
    ],
  },
  menu: {
    viewBox: '0 0 24 24',
    style: 'stroke',
    shapes: [path('M4 5h16'), path('M4 12h16'), path('M4 19h16')],
  },
  close: {
    viewBox: '0 0 24 24',
    style: 'stroke',
    shapes: [path('M18 6 6 18'), path('m6 6 12 12')],
  },
  'arrow-right': {
    viewBox: '0 0 24 24',
    style: 'stroke',
    shapes: [path('M5 12h14'), path('m12 5 7 7-7 7')],
  },
  'arrow-up-right': {
    viewBox: '0 0 24 24',
    style: 'stroke',
    shapes: [path('M7 7h10v10'), path('M7 17 17 7')],
  },
  'arrow-up': {
    viewBox: '0 0 24 24',
    style: 'stroke',
    shapes: [path('m5 12 7-7 7 7'), path('M12 19V5')],
  },
  copy: {
    viewBox: '0 0 24 24',
    style: 'stroke',
    shapes: [
      { kind: 'rect', x: 8, y: 8, width: 14, height: 14, rx: 2 },
      path('M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2'),
    ],
  },
  check: {
    viewBox: '0 0 24 24',
    style: 'stroke',
    shapes: [path('M20 6 9 17l-5-5')],
  },
  mail: {
    viewBox: '0 0 24 24',
    style: 'stroke',
    shapes: [
      path('m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7'),
      { kind: 'rect', x: 2, y: 4, width: 20, height: 16, rx: 2 },
    ],
  },
  code: {
    viewBox: '0 0 24 24',
    style: 'stroke',
    shapes: [path('m18 16 4-4-4-4'), path('m6 8-4 4 4 4'), path('m14.5 4-5 16')],
  },
  server: {
    viewBox: '0 0 24 24',
    style: 'stroke',
    shapes: [
      { kind: 'rect', x: 2, y: 2, width: 20, height: 8, rx: 2 },
      { kind: 'rect', x: 2, y: 14, width: 20, height: 8, rx: 2 },
      path('M6 6h.01'),
      path('M6 18h.01'),
    ],
  },
  sparkles: {
    viewBox: '0 0 24 24',
    style: 'stroke',
    shapes: [
      path(
        'M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z',
      ),
      path('M20 2v4'),
      path('M22 4h-4'),
      { kind: 'circle', cx: 4, cy: 20, r: 2 },
    ],
  },
  wrench: {
    viewBox: '0 0 24 24',
    style: 'stroke',
    shapes: [
      path(
        'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z',
      ),
    ],
  },
  linkedin: {
    viewBox: '0 0 448 512',
    style: 'fill',
    shapes: [
      path(
        'M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z',
      ),
    ],
  },
  whatsapp: {
    viewBox: '0 0 448 512',
    style: 'fill',
    shapes: [
      path(
        'M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z',
      ),
    ],
  },
  github: {
    viewBox: '0 0 512 512',
    style: 'fill',
    shapes: [
      path(
        'M216.5 362.5c-66-8-112.5-55.5-112.5-117 0-25 9-52 24-70-6.5-16.5-5.5-51.5 2-66 20-2.5 47 8 63 22.5 19-6 39-9 63.5-9s44.5 3 62.5 8.5c15.5-14 43-24.5 63-22 7 13.5 8 48.5 1.5 65.5 16 19 24.5 44.5 24.5 70.5 0 61.5-46.5 108-113.5 116.5 17 11 28.5 35 28.5 62.5l0 52C323 491.5 335.5 500 350.5 494 441 459.5 512 369 512 257 512 115.5 397 0 255.5 0S0 115.5 0 257c0 111 70.5 203 165.5 237.5 13.5 5 26.5-4 26.5-17.5l0-40c-7 3-16 5-24 5-33 0-52.5-18-66.5-51.5-5.5-13.5-11.5-21.5-23-23-6-.5-8-3-8-6 0-6 10-10.5 20-10.5 14.5 0 27 9 40 27.5 10 14.5 20.5 21 33 21s20.5-4.5 32-16c8.5-8.5 15-16 21-21z',
      ),
    ],
  },
  instagram: {
    viewBox: '0 0 448 512',
    style: 'fill',
    shapes: [
      path(
        'M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
      ),
    ],
  },
} satisfies Record<string, IconDef>;

export type IconName = keyof typeof icons;

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex shrink-0', 'aria-hidden': 'true' },
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-full"
      [attr.viewBox]="icon().viewBox"
      [attr.fill]="icon().style === 'fill' ? 'currentColor' : 'none'"
      [attr.stroke]="icon().style === 'stroke' ? 'currentColor' : null"
      [attr.stroke-width]="icon().style === 'stroke' ? 2 : null"
      stroke-linecap="round"
      stroke-linejoin="round"
      focusable="false"
    >
      @for (shape of icon().shapes; track $index) {
        @switch (shape.kind) {
          @case ('path') {
            <path [attr.d]="shape.d" />
          }
          @case ('circle') {
            <circle [attr.cx]="shape.cx" [attr.cy]="shape.cy" [attr.r]="shape.r" />
          }
          @case ('rect') {
            <rect
              [attr.x]="shape.x"
              [attr.y]="shape.y"
              [attr.width]="shape.width"
              [attr.height]="shape.height"
              [attr.rx]="shape.rx"
            />
          }
        }
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  protected readonly icon = computed<IconDef>(() => icons[this.name()]);
}
