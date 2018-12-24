import { NgModule } from '@angular/core';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AngularMaterialsModule } from '../../angularMaterials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    AngularMaterialsModule,
    FlexLayoutModule
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent
  ],
  declarations: [
    ToolbarComponent,
    SidenavComponent
  ],
  providers: [],
})
export class NavigationModule { }
