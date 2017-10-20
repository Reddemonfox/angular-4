import { Component } from '@angular/core';
import {} from '../shared/_services/index';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {AlertService} from '../shared/_services/alert.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  param = {value: 'world'};
  currentLanguage: any;
  translate: any;
  constructor(translate: TranslateService, private alertService: AlertService) {
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // do something
      this.alertService.info('Language Changed to ' + event.lang);
    });
    translate.setDefaultLang('en');
    translate.use('en');
    this.translate = translate;
    this.currentLanguage = 'en';
  }
  changeLanguage() {
    if (this.currentLanguage === 'en') {
      this.currentLanguage = 'hindi';
      this.translate.use('hindi');
    }else {
      this.translate.use('en');
      this.currentLanguage = 'en';
    }
  }
}
