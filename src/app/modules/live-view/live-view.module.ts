import {NgModule} from '@angular/core';
import {LiveViewComponent} from './page/live-view/live-view.component';
import {CurrentSkierComponent} from './page/current-skier/current-skier.component';
import {LeaderBoardComponent} from './page/leader-board/leader-board.component';
import {SharedModule} from '@shared/shared.module';
import {LiveViewRoutingModule} from './live-view-routing.module';

@NgModule({
  declarations: [LiveViewComponent, CurrentSkierComponent, LeaderBoardComponent],
  exports: [],
  imports: [
    LiveViewRoutingModule,
    SharedModule
  ]
})
export class LiveViewModule {
}
