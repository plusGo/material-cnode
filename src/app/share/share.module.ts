import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {MaterialPlusModule} from '../../../projects/material-plus/src/lib/material-plus.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialPlusModule
  ],
  exports: [
    CommonModule,
    MaterialPlusModule,
  ]
})
export class ShareModule {
}
