import {
	mergeMap,
	catchError,
	switchMap,
	map,
	finalize,
	tap,
	share,
} from "rxjs/operators";
import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable()
export class MagicEffects {
	constructor() {}
}
