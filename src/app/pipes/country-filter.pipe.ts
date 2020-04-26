import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "countryFilter",
})
export class CountryFilterPipe implements PipeTransform {
	transform(list: any, filteredText: string): any {
		return list.filter(
			(country) =>
				country.name.toLowerCase().indexOf(filteredText.toLowerCase()) >
				-1
		);
	}
}
