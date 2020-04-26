import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";

import { ModalHeaderComponent } from "src/app/components/modal-header/modal-header.component";

@NgModule({
	declarations: [ModalHeaderComponent],
	imports: [CommonModule, IonicModule, RouterModule],
	exports: [ModalHeaderComponent],
	entryComponents: [ModalHeaderComponent],
})
export class SharedModule {}
