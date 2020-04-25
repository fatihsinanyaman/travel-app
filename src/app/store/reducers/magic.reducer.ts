import * as fromMagicActions from "../actions/magic.actions";

export interface MagicState {
	magicDays: [];
	magicPrice: number;
}

export const initialState: MagicState = {
	magicDays: [],
	magicPrice: 3400,
};

export function reducer(
	state = initialState,
	action: fromMagicActions.MagicActions
): MagicState {
	switch (action.type) {
		case fromMagicActions.SET_MAGIC_DAYS: {
			return {
				...state,
				magicDays: action.payload,
			};
		}
		case fromMagicActions.SET_MAGIC_PRICE: {
			return {
				...state,
				magicPrice: action.payload,
			};
		}
	}

	return state;
}
