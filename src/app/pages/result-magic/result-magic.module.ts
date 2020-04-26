import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultMagicPageRoutingModule } from './result-magic-routing.module';

import { ResultMagicPage } from './result-magic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultMagicPageRoutingModule
  ],
  declarations: [ResultMagicPage]
})
export class ResultMagicPageModule {}
