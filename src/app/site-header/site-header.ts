import { Component, computed, input, signal } from '@angular/core';

interface HeaderCopy {
  home: string;
  homeLabel: string;
  navLabel: string;
  links: { href: string; label: string }[];
  switchHref: string;
  switchLang: string;
  switchText: string;
  switchLabel: string;
  signIn: string;
  demo: string;
  openMenu: string;
  closeMenu: string;
}

const COPY: Record<'en' | 'es', HeaderCopy> = {
  en: {
    home: '/en#top',
    homeLabel: 'Skooltrak home',
    navLabel: 'Main',
    links: [
      { href: '/en#personas', label: "Who it's for" },
      { href: '/en#platform', label: 'Platform' },
      { href: '/en#safety', label: 'Safety' },
      { href: '/en#start', label: 'Getting started' },
    ],
    switchHref: '/',
    switchLang: 'es',
    switchText: 'ES',
    switchLabel: 'Ver en español',
    signIn: 'Sign in',
    demo: 'Book a demo',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  es: {
    home: '/#inicio',
    homeLabel: 'Inicio de Skooltrak',
    navLabel: 'Principal',
    links: [
      { href: '/#perfiles', label: 'Para quién es' },
      { href: '/#plataforma', label: 'Plataforma' },
      { href: '/#seguridad', label: 'Seguridad' },
      { href: '/#comenzar', label: 'Cómo empezar' },
    ],
    switchHref: '/en',
    switchLang: 'en',
    switchText: 'EN',
    switchLabel: 'View in English',
    signIn: 'Iniciar sesión',
    demo: 'Agendar una demo',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
};

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
  host: { '(document:keydown.escape)': 'close()' },
})
export class SiteHeader {
  readonly lang = input.required<'en' | 'es'>();
  protected readonly copy = computed(() => COPY[this.lang()]);
  protected readonly open = signal(false);

  protected toggle(): void {
    this.open.update((v) => !v);
  }

  protected close(): void {
    this.open.set(false);
  }
}
