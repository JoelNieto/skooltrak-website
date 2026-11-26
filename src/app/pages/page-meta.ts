import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';

/** Sets the document language and description for a localized page. */
export function applyPageMeta(lang: 'en' | 'es', description: string): void {
  inject(DOCUMENT).documentElement.lang = lang;
  inject(Meta).updateTag({ name: 'description', content: description });
}
