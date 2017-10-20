import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {AlertService} from '../_services/index';
import {MatSnackBar} from '@angular/material';

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
      if (message && message.text) {
        this.snackBar.open(message.text, null, {duration: 2000, extraClasses: message.classes});
      }
    });
  }

  ngOnDestroy(): void {
    // unsubscribe on destroy to prevent memory leaks
    this.subscription.unsubscribe();
  }
}
