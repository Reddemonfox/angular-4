﻿import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import {UserService} from '../../../shared/_services/user.service';
// import {AlertService} from '../../../shared/_services/alert.service';
import {AlertService , UserService} from '../../../shared/_services/index';
import {Alert, AlertType} from '../../../shared/_models/index';


@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                  const alert = new Alert({type: AlertType.Info, message: 'Registration successful'});
                    this.alertService.show(alert, true);
                    this.router.navigate(['/login']);
                },
                error => {
                  const alert = new Alert({type: AlertType.Error, message: error});
                  this.alertService.show(alert);
                    this.loading = false;
                });
    }
}
