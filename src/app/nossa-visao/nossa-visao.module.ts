import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NossaVisaoComponent } from './nossa-visao.component';
import { NossaVisaoRoutingModule } from './nossa-visao-routing.module';

@NgModule({
	imports: [
		CommonModule,
		NossaVisaoRoutingModule,
	],
	declarations: [NossaVisaoComponent],
	exports: [NossaVisaoComponent],
})
export class NossaVisaoModule { }
