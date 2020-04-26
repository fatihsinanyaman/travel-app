import { Component, OnInit, Input } from "@angular/core";
import { Country } from "src/app/interfaces";

@Component({
	selector: "app-country-select-button",
	templateUrl: "./country-select-button.component.html",
	styleUrls: ["./country-select-button.component.scss"],
})
export class CountrySelectButtonComponent implements OnInit {
	@Input() countries: Array<Country>;

	constructor() {}

	ngOnInit() {}
}
