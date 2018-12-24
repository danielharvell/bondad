import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularMaterialsModule } from '../../angularMaterials.module';
import { NavigationModule } from '../navigation/navigation.module';
import { HomeRoutingModule } from './home-routing.module';
import { SplashComponent } from './splash/splash.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialsModule,
    HomeRoutingModule,
    FlexLayoutModule,
    NavigationModule
  ],
  declarations: [
    SplashComponent,
    HomeComponent
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
