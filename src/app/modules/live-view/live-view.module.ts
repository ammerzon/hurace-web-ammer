import {NgModule} from '@angular/core';
import {LiveViewComponent} from './page/live-view/live-view.component';
import {CurrentSkierComponent} from './page/current-skier/current-skier.component';
import {LeaderBoardComponent} from './page/leader-board/leader-board.component';
import {SharedModule} from '../../shared/shared.module';
import {LiveViewRoutingModule} from './live-view-routing.module';
import { RunBarComponent } from './page/run-bar/run-bar.component';

@NgModule({
  declarations: [LiveViewComponent, CurrentSkierComponent, LeaderBoardComponent, RunBarComponent],
  imports: [
    LiveViewRoutingModule,
    SharedModule
  ]
})
export class LiveViewModule {
}
