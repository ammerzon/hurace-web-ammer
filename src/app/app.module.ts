import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './layout/navigation/navigation.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {AuthLayoutComponent} from './layout/auth-layout/auth-layout.component';
import {ContentLayoutComponent} from './layout/content-layout/content-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AuthLayoutComponent,
    ContentLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
