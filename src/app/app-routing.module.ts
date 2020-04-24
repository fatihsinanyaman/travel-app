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
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
