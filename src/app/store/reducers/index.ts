import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";

import * as magicReducer from "./magic.reducer";

export interface AppState {
	magic: magicReducer.MagicState;
}

export const reducers: ActionReducerMap<AppState> = {
	magic: magicReducer.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
	? []
	: [];
