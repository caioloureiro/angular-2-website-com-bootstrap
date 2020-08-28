import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato.component';

const routes: Routes = [];

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: 'contato', component: ContatoComponent }
		])
	],
	exports: [RouterModule]
})
export class ContatoRoutingModule { }