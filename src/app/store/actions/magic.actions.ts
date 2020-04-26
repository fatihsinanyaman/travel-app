import { Action } from "@ngrx/store";
import { Country } from "src/app/interfaces";

export const SET_MAGIC_DAYS = "[Magic Days] Set";
export const SET_MAGIC_PRICE = "[Magic Price] Set";
export const SET_MAGIC_COUNTRIES = "[Magic Contries] Set";
export const SET_ACTIVE_CONTINENT = "[Magic ActiveContinent] Set";

export class SetMagicDays implements Action {
	readonly type = SET_MAGIC_DAYS;
	constructor(public payload) {}
}

export class SetMagicPrice implements Action {
	readonly type = SET_MAGIC_PRICE;
	constructor(public payload: number) {}
}

export class SetMagicCountries implements Action {
	readonly type = SET_MAGIC_COUNTRIES;
	constructor(public payload: Array<Country>) {}
}

export class SetActiveContinent implements Action {
	readonly type = SET_ACTIVE_CONTINENT;
	constructor(public payload: string) {}
}

export type MagicActions =
	| SetMagicDays
	| SetMagicPrice
	| SetMagicCountries
	| SetActiveContinent;
