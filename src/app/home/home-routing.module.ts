import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [];

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: 'home', component: HomeComponent }
		])
	],
	exports: [RouterModule]
})
export class HomeRoutingModule { }