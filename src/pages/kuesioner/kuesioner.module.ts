import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KuesionerPage } from './kuesioner';

@NgModule({
  declarations: [
    KuesionerPage,
  ],
  imports: [
    IonicPageModule.forChild(KuesionerPage),
  ],
})
export class KuesionerPageModule {}
