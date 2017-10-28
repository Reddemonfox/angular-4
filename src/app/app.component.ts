import {Component} from '@angular/core';
import {AlertService} from '../shared/_services/index';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {Alert, AlertType, Language, AlertDuration} from '../shared/_models/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentLanguage: Language;
  translate: any;

  constructor(translate: TranslateService, private alertService: AlertService) {
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      const alert = new Alert({
        type: AlertType.Info,
        message: 'Language Changed to ' + event.lang,
        duration: AlertDuration.LENGTH_LONG
      });
      this.alertService.show(alert);
    });
    translate.addLangs([Language.ENGLISH, Language.HINDI, Language.SPANISH, Language.ARABIC]);
    translate.setDefaultLang(Language.ENGLISH);
    translate.use(Language.ENGLISH);
  }
}
