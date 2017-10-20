import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class GlobalService {

  private _loginStatus = new BehaviorSubject<boolean>(false);

  loginStatus$ = this._loginStatus.asObservable();

  changeLoginStatus(value) {
    this._loginStatus.next(value);
  }

}
