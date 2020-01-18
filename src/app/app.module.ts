import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './layout/navigation/navigation.component';
import {CoreModule} from '@app/core.module';
import {SharedModule} from '@shared/shared.module';
import {ContentLayoutComponent} from './layout/content-layout/content-layout.component';
import {environment} from '@env';
import {BASE_PATH} from '@hurace-client/api';
import {registerLocaleData} from '@angular/common';
import localeAt from '@angular/common/locales/de-AT';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material';

registerLocaleData(localeAt, 'de-AT');

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    {provide: BASE_PATH, useValue: environment.huraceApiUrl},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
