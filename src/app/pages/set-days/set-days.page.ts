import { Component, OnInit } from "@angular/core";
import moment from "moment";
import { Store } from "@ngrx/store";

import * as fromStore from "src/app/store";

@Component({
	selector: "app-set-days",
	templateUrl: "./set-days.page.html",
	styleUrls: ["./set-days.page.scss"],
})
export class SetDaysPage implements OnInit {
	months = [];
	weeks = [];
	currentMonthNumber = 0;
	selectedDays = [];
	constructor(private store: Store<fromStore.AppState>) {
		this.setMonths();
	}

	ngOnInit() {
		this.store.select<any>("magic").subscribe((state) => {
			this.selectedDays = state.days;
		});
	}

	setMonths() {
		let month;
		for (let i = 0; i < 12; i++) {
			month = moment(new Date()).add(i, "M");
			this.months.push({
				name: month.format("MMM"),
				number: month.format("M"),
			});
		}
		this.changeMonth(this.months[1].number);
	}
	changeMonth(monthNumber) {
		this.currentMonthNumber = monthNumber;
		this.getMonthWeeks(monthNumber);
	}

	getMonthWeeks(monthNumber) {
		this.weeks = [];
		const year = new Date().getFullYear();
		const format = "YYYY-M-DD";
		let startDate = moment(`${year}-${monthNumber}-01`, format)
			.startOf("month")
			.format(format);
		let endDate;

		const finishedDate = moment(startDate, format)
			.add(1, "months")
			.format(format);

		do {
			endDate = moment(startDate, format).add(1, "weeks").format(format);
			this.weeks.push({
				startDate,
				endDate,
			});
			startDate = moment(endDate, format).add(1, "days").format(format);
		} while (
			moment(finishedDate, format).diff(moment(endDate, format), "days") >
			0
		);
	}
	weekSelect(status, startDate) {
		if (status) {
			this.store.dispatch(
				new fromStore.SetMagicDays([...this.selectedDays, startDate])
			);
		} else {
			this.store.dispatch(
				new fromStore.SetMagicDays(
					this.selectedDays.filter((d) => d !== startDate)
				)
			);
		}
	}
}
