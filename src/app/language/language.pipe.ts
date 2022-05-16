import { Pipe, PipeTransform } from '@angular/core';
import { translations } from '../translations';
import { LanguageService } from './language.service';

@Pipe({
  name: 'translate',
  pure: false,
})
export class LanguagePipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}

  transform(key: string): string {
    return translations[this.languageService.language][key];
  }
}
