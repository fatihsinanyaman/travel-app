import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";

import * as fromStore from "src/app/store";

@Component({
	selector: "app-set-price",
	templateUrl: "./set-price.page.html",
	styleUrls: ["./set-price.page.scss"],
})
export class SetPricePage implements OnInit {
	price;
	step = 100;
	days = [];
	constructor(
		private store: Store<fromStore.AppState>,
		private modalController: ModalController
	) {
		this.setPrice(3400);
	}

	ngOnInit() {
		this.store.select<any>("magic").subscribe((state) => {
			this.price = state.price;
			this.days = state.days;
		});
	}

	setPrice(price) {
		this.store.dispatch(new fromStore.SetMagicPrice(price));
	}

	upPrice() {
		this.setPrice(this.price + this.step);
	}

	downPrice() {
		if (this.price > this.step) {
			this.setPrice(this.price - this.step);
		} else {
			this.setPrice(1);
		}
	}

	async finish() {
		await this.modalController.dismiss({
			completed: true,
		});
	}
}
