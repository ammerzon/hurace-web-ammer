import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {ImageComponent} from '@shared/components/image/image.component';
import {GenderIndicatorComponent} from '@shared/components/gender-indicator/gender-indicator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RaceStatusIndicatorComponent} from '@shared/components/race-status-indicator/race-status-indicator.component';
import {RunBarComponent} from '@shared/components/run-bar/run-bar.component';

@NgModule({
  declarations: [ImageComponent, GenderIndicatorComponent, RaceStatusIndicatorComponent, RunBarComponent],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    LazyLoadImageModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MaterialModule,
    LazyLoadImageModule,
    ImageComponent,
    GenderIndicatorComponent,
    RaceStatusIndicatorComponent,
    RunBarComponent
  ]
})
export class SharedModule {
}
