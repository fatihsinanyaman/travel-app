import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HomePageRoutingModule } from "./home-routing.module";

import { HomePage } from "./home.page";

import { CountrySelectButtonComponent } from "./components/country-select-button/country-select-button.component";
import { SetDaysPageModule } from "src/app/pages/set-days/set-days.module";
import { SetPricePageModule } from "src/app/pages/set-price/set-price.module";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		HomePageRoutingModule,
		SetDaysPageModule,
		SetPricePageModule,
	],
	declarations: [HomePage, CountrySelectButtonComponent],
	entryComponents: [CountrySelectButtonComponent],
})
export class HomePageModule {}
