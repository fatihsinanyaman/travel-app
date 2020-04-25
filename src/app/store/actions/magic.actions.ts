import { Action } from "@ngrx/store";

export const SET_MAGIC_DAYS = "[Magic Days] Set";
export const SET_MAGIC_PRICE = "[Magic Price] Set";

export class SetMagicDays implements Action {
	readonly type = SET_MAGIC_DAYS;
	constructor(public payload) {}
}

export class SetMagicPrice implements Action {
	readonly type = SET_MAGIC_PRICE;
	constructor(public payload: number) {}
}

export type MagicActions = SetMagicDays | SetMagicPrice;
