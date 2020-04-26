import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromStore from "src/app/store";

@Component({
	selector: "app-result-magic",
	templateUrl: "./result-magic.page.html",
	styleUrls: ["./result-magic.page.scss"],
})
export class ResultMagicPage implements OnInit {
	countries = [];
	days = [];
	price = 0;
	constructor(private store: Store<fromStore.AppState>) {}

	ngOnInit() {
		this.store.select<any>("magic").subscribe((state) => {
			this.countries = state.countries;
			this.days = state.days;
			this.price = state.price;
		});
	}
}
