import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuemSomosComponent } from './quem-somos.component';
import { QuemSomosRoutingModule } from './quem-somos-routing.module';

@NgModule({
	imports: [
		CommonModule,
		QuemSomosRoutingModule,
	],
	declarations: [QuemSomosComponent],
	exports: [QuemSomosComponent],
})
export class QuemSomosModule { }
