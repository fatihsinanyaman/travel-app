import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ModalController } from "@ionic/angular";
import { SetDaysPage } from "src/app/pages/set-days/set-days.page";

import * as fromStore from "src/app/store";

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
		public modalController: ModalController
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
		modal.onWillDismiss().then(() => {
			this.modalDisplayStatus = false;
		});
	}
}
