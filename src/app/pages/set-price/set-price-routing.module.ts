import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetPricePage } from './set-price.page';

const routes: Routes = [
  {
    path: '',
    component: SetPricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetPricePageRoutingModule {}
