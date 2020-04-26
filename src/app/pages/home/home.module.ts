import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { HomePageRoutingModule } from "./home-routing.module";

import { HomePage } from "./home.page";

import { DateSelectorComponent } from "./components/date-selector/date-selector.component";
import { CountrySelectButtonComponent } from "./components/country-select-button/country-select-button.component";

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
	declarations: [
		HomePage,
		DateSelectorComponent,
		CountrySelectButtonComponent,
	],
	entryComponents: [DateSelectorComponent, CountrySelectButtonComponent],
})
export class HomePageModule {}
