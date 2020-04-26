import * as fromMagicActions from "../actions/magic.actions";
import { Country, Continent } from "src/app/interfaces";

export interface MagicState {
	price: number;
	countries: Array<Country>;
	continents: Array<Continent>;
	activeContinentCode: string;
	days: [];
}

export const initialState: MagicState = {
	price: 3400,
	countries: [],
	continents: [
		{
			name: "Europe",
			code: "eu",
		},
		{
			name: "Africa",
			code: "af",
		},
		{
			name: "north America",
			code: "na",
		},
		{
			name: "South America",
			code: "sa",
		},
	],
	days: [],
	activeContinentCode: "eu",
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

		case fromMagicActions.SET_MAGIC_COUNTRIES: {
			return {
				...state,
				countries: action.payload,
			};
		}

		case fromMagicActions.SET_ACTIVE_CONTINENT: {
			return {
				...state,
				activeContinentCode: action.payload,
			};
		}
	}

	return state;
}
