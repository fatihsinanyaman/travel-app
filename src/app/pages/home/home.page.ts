import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromStore from "src/app/store";

@Component({
	selector: "app-home",
	templateUrl: "./home.page.html",
	styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
	countries: [];

	constructor(private store: Store<fromStore.AppState>) {}

	ngOnInit() {
		this.store.select<any>("magic").subscribe((state) => {
			this.countries = state.countries;
		});
	}
}
