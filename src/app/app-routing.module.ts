import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full",
	},
	{
		path: "home",
		loadChildren: () =>
			import("./pages/home/home.module").then((m) => m.HomePageModule),
	},
	{
		path: "search-location",
		loadChildren: () =>
			import("./pages/search-location/search-location.module").then(
				(m) => m.SearchLocationPageModule
			),
	},
	{
		path: "set-days",
		loadChildren: () =>
			import("./pages/set-days/set-days.module").then(
				(m) => m.SetDaysPageModule
			),
	},
	{
		path: "set-price",
		loadChildren: () =>
			import("./pages/set-price/set-price.module").then(
				(m) => m.SetPricePageModule
			),
	},

	{
		path: "result-magic",
		loadChildren: () =>
			import("./pages/result-magic/result-magic.module").then(
				(m) => m.ResultMagicPageModule
			),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
