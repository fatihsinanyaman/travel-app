import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SetPricePageRoutingModule } from "./set-price-routing.module";

import { SetPricePage } from "./set-price.page";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SetPricePageRoutingModule,
		SharedModule,
	],
	declarations: [SetPricePage],
})
export class SetPricePageModule {}
