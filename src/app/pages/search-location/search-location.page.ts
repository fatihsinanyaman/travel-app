import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromStore from "src/app/store";
import countries from "src/app/json/countries.json";

@Component({
	selector: "app-search-location",
	templateUrl: "./search-location.page.html",
	styleUrls: ["./search-location.page.scss"],
})
export class SearchLocationPage implements OnInit {
	continents: [];
	continentCountries = [];
	allCountries = countries;
	selectedContinentCode = "eu";
	selectedCountries = [];
	searchTerm = "";
	constructor(private store: Store<fromStore.AppState>) {
		this.setContinentCountries();
	}

	ngOnInit() {
		this.store.select<any>("magic").subscribe((state) => {
			this.continents = state.continents;
			this.selectedCountries = state.countries;
		});
	}

	continentChanged(code) {
		this.selectedContinentCode = code;
		this.setContinentCountries();
		this.store.dispatch(new fromStore.SetMagicCountries([]));
	}

	setContinentCountries() {
		this.continentCountries = this.allCountries.filter(
			(c) => c.continent.toLowerCase() === this.selectedContinentCode
		);
	}
	changeCountrySelect(status, country) {
		let userCountries = [];
		if (status) {
			userCountries = [...this.selectedCountries, country];
		} else {
			userCountries = this.selectedCountries.filter(
				(c) => c.code !== country.code
			);
		}
		this.store.dispatch(new fromStore.SetMagicCountries(userCountries));
	}
}
