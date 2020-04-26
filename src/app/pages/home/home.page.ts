import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";

import * as fromStore from "src/app/store";
import { SetDaysPage } from "src/app/pages/set-days/set-days.page";
import { SetPricePage } from "src/app/pages/set-price/set-price.page";

@Component({
	selector: "app-home",
	templateUrl: "./home.page.html",
	styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
	countries: [];
	days: [];
	price: 0;
	modalDisplayStatus = false;

	constructor(
		private store: Store<fromStore.AppState>,
		private modalController: ModalController,
		private router: Router
	) {}

	ngOnInit() {
		this.store.select<any>("magic").subscribe((state) => {
			this.countries = state.countries;
			this.days = state.days;
			this.price = state.price;
		});
	}

	async openSetDaysModal() {
		const modal = await this.modalController.create({
			component: SetDaysPage,
			cssClass: "set-days-modal",
		});
		await modal.present();
		this.modalDisplayStatus = true;
		modal.onWillDismiss().then(({ data }) => {
			this.modalDisplayStatus = false;
			if (data.completed) {
				if (this.days.length > 0 && this.price > 0) {
					this.router.navigate(["/result-magic"]);
				} else {
					this.openSetPriceModal();
				}
			}
		});
	}

	async openSetPriceModal() {
		const modal = await this.modalController.create({
			component: SetPricePage,
			cssClass: "set-price-modal",
		});
		await modal.present();
		this.modalDisplayStatus = true;
		modal.onWillDismiss().then(({ data }) => {
			this.modalDisplayStatus = false;
			if (data.completed) {
				if (this.days.length > 0 && this.price > 0) {
					this.router.navigate(["/result-magic"]);
				} else {
					this.openSetDaysModal();
				}
			}
		});
	}
}
