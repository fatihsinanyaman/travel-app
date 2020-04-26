import { Component, OnInit, Input } from "@angular/core";
import { Country } from "src/app/interfaces";

@Component({
	selector: "app-country-select-button",
	templateUrl: "./country-select-button.component.html",
	styleUrls: ["./country-select-button.component.scss"],
})
export class CountrySelectButtonComponent implements OnInit {
	@Input() countries: Array<Country>;
	countriesBeauty = "";
	displayedCountryCount = 0;
	constructor() {}

	ngOnInit() {}

	setdisplayedCountiresBeauty() {
		let countryList = [];
		let totalChar = 0;
		this.countries.forEach((country) => {
			if (totalChar + country.name.length < 30) {
				countryList.push(country.name);
				totalChar += country.name.length;
			} else {
				return;
			}
		});
		this.countriesBeauty = countryList.join(", ");
		if (countryList.length < this.countries.length) {
			this.countriesBeauty += "...";
		}
		this.displayedCountryCount = countryList.length;
	}
	ngOnChanges() {
		this.setdisplayedCountiresBeauty();
	}
}
