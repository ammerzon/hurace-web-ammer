import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {ImageComponent} from '@shared/components/image/image.component';
import {GenderIndicatorComponent} from '@shared/components/gender-indicator/gender-indicator.component';

@NgModule({
  declarations: [ImageComponent, GenderIndicatorComponent],
  imports: [
    CommonModule,
    LazyLoadImageModule
  ],
  exports: [
    MaterialModule,
    FontAwesomeModule,
    LazyLoadImageModule,
    CommonModule,
    ImageComponent,
    GenderIndicatorComponent
  ]
})
export class SharedModule {
}
