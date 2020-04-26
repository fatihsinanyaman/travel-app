import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ModalController } from "@ionic/angular";

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
	modalDisplayStatus = false;

	constructor(
		private store: Store<fromStore.AppState>,
		private modalController: ModalController
	) {}

	ngOnInit() {
		this.store.select<any>("magic").subscribe((state) => {
			this.countries = state.countries;
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
				this.openSetPriceModal();
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
				//this.openSetPriceModal();
			}
		});
	}
}
