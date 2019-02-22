import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerrosPage } from './perros';

@NgModule({
  declarations: [
    PerrosPage,
  ],
  imports: [
    IonicPageModule.forChild(PerrosPage),
  ],
})
export class PerrosPageModule {}
