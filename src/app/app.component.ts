import { Component } from '@angular/core';
import { LanguageService } from './language/language.service';
import { translations } from './translations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public languageService: LanguageService) {
    languageService.setTranslations(translations);
    console.log(this.languageService.getValue('hello')); // <== output: hi!
  }
}
