import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetDaysPage } from './set-days.page';

const routes: Routes = [
  {
    path: '',
    component: SetDaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetDaysPageRoutingModule {}
