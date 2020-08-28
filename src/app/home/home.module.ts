import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule,
	],
	declarations: [HomeComponent],
	exports: [HomeComponent],
})
export class HomeModule {}
