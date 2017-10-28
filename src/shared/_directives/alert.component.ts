﻿import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {AlertService} from '../_services/index';
import {MatSnackBar} from '@angular/material';
import {AlertType} from '../_models/index';

@Component({
  moduleId: module.id,
  selector: 'app-alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService, public snackBar: MatSnackBar) {
    // subscribe to alert messages
    this.subscription = alertService.getMessage().subscribe(message => {
      if (message && message.message) {
        this.snackBar.open(message.message, null, {duration: message.duration, extraClasses: [String(AlertType[message.type])]});
      }
    });
  }

  ngOnDestroy(): void {
    // unsubscribe on destroy to prevent memory leaks
    this.subscription.unsubscribe();
  }
}
