import { Injectable } from '@angular/core';

export type Language = 'it' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  language: Language = 'en';
  translations: { [key: string]: any };

  setLanguage(lang: Language) {
    this.language = lang;
  }

  getLanguage(): Language {
    return this.language;
  }

  setTranslations(translations: { [key: string]: any }) {
    this.translations = translations;
  }

  getValue(key: string): string {
    return this.translations[this.language][key];
  }
}
