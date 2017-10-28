﻿import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../../../shared/_services/authentication.service';
import {AlertService} from '../../../shared/_services/alert.service';
import {Alert, AlertType} from '../../../shared/_models/index';
import {TranslateService} from '@ngx-translate/core';
import {Language} from '../../../shared/_models/index';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  val = false;
  returnUrl: string;
  currentLanguage: Language;
  translate: any;
  availableLanguages = [];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private alertService: AlertService,
              translate: TranslateService) {
    this.translate = translate;
    this.currentLanguage = translate.currentLang;
  }

  populateAvailableLanguages(availableLanguages) {
    this.availableLanguages = [];
    const langs = [];
    for(const lang in availableLanguages) {
      langs.push({name: availableLanguages[lang].toUpperCase(), value: availableLanguages[lang]});
    }
    this.availableLanguages = langs;
  }
  ngOnInit() {
    // reset login status
    setTimeout(() => {
      this.populateAvailableLanguages(this.translate.getLangs());
    }, 100);
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  changeLanguage(lang) {
    this.currentLanguage = lang.value;
    this.translate.use(lang.value);
  }
  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          const alert = new Alert({type: AlertType.Error, message: error});
          this.alertService.show(alert);
          this.loading = false;
        });
  }
}
