import * as fromMagicActions from "../actions/magic.actions";
import { Country } from "src/app/interfaces";

export interface MagicState {
	price: number;
	countries: Array<Country>;
	days: [];
}

export const initialState: MagicState = {
	price: 3400,
	countries: [],
	days: [],
};

export function reducer(
	state = initialState,
	action: fromMagicActions.MagicActions
): MagicState {
	switch (action.type) {
		case fromMagicActions.SET_MAGIC_DAYS: {
			return {
				...state,
				days: action.payload,
			};
		}
		case fromMagicActions.SET_MAGIC_PRICE: {
			return {
				...state,
				price: action.payload,
			};
		}
	}

	return state;
}
