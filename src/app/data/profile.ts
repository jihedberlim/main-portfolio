import { IconName } from '../shared/icon';

export interface SocialLink {
  label: string;
  icon: IconName;
  href: string;
}

export const profile = {
  name: 'Jihed Berlim',
  email: 'jihedberlim@gmail.com',
  whatsappNumber: '5541997199519',
  github: 'https://github.com/jihedberlim',
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function socialLinks(whatsappMessage: string): SocialLink[] {
  return [
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      href: 'https://www.linkedin.com/in/jihed-elmograbi-berlim/',
    },
    { label: 'GitHub', icon: 'github', href: profile.github },
    { label: 'WhatsApp', icon: 'whatsapp', href: whatsappLink(whatsappMessage) },
    { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/jihedb_/' },
  ];
}
