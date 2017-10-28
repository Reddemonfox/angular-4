import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AlertComponent} from '../shared/_directives/alert.component';
import {FormsModule} from '@angular/forms';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import {AuthGuard} from '../shared/_guards/auth.guard';
import {AlertService} from '../shared/_services/alert.service';
import {AuthenticationService} from '../shared/_services/authentication.service';
import {UserService} from '../shared/_services/user.service';
import {fakeBackendProvider} from '../shared/_helpers/fake-backend';
import {MockBackend} from '@angular/http/testing';
import {routing} from './app.routing';
import {LoginComponent} from './Auth/login/login.component';
import {RegisterComponent} from './Auth/register/register.component';
import {HomeComponent} from './Auth/home/home.component';
import {GlobalService} from '../shared/_services/global.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatInputModule, MatFormFieldModule, MatButtonModule, MatSnackBarModule, MatCardModule, MatListModule,
  MatDialogModule, MatDialog, MatDialogRef, MatIconModule, MatMenuModule
} from '@angular/material';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MainSearchComponent} from '../shared/_components/main.search.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {ListItemComponent, ListItemQuickViewComponent} from './list-item/list-item.component';
import { BannerSliderComponent } from './banner-slider/banner-slider.component';
import {ImageZoomModule} from 'angular2-image-zoom';

export function HttpLoaderFactory( http: HttpClient) {
  return new TranslateHttpLoader(http, 'translations/', '-lang.json');
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    ClickOutsideModule,
    ImageZoomModule,
    MatMenuModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    routing
  ],
  entryComponents: [
    ListItemQuickViewComponent
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    MainSearchComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListItemComponent,
    ListItemQuickViewComponent,
    BannerSliderComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    GlobalService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
