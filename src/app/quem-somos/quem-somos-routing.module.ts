import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuemSomosComponent } from './quem-somos.component';

const routes: Routes = [];

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: 'quem-somos', component: QuemSomosComponent }
		])
	],
	exports: [RouterModule]
})
export class QuemSomosRoutingModule { }