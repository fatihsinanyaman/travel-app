import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultMagicPage } from './result-magic.page';

const routes: Routes = [
  {
    path: '',
    component: ResultMagicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultMagicPageRoutingModule {}
