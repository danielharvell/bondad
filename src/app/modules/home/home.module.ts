import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SplashComponent } from './splash/splash.component';

@NgModule({
  declarations: [SplashComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  bootstrap: [SplashComponent]
})
export class HomeModule { }
