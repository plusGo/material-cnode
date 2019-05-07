import {NgModule} from '@angular/core';
import {MatAppComponent} from './mat-app/mat-app.component';
import {MatAppBarComponent} from './mat-app-bar/mat-app-bar.component';
import {CommonModule} from '@angular/common';
import {MatAppBodyComponent} from './mat-app-body/mat-app-body.component';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';

export const MATERIAL_MODULES = [
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
  MatBottomSheetModule,
  MatRippleModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatIconModule,
  MatBadgeModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatMenuModule,
  MatToolbarModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatStepperModule,
  MatTabsModule,
  MatTreeModule,
  MatCardModule
];

@NgModule({
  declarations: [MatAppComponent, MatAppBarComponent, MatAppBodyComponent],
  imports: [CommonModule,...MATERIAL_MODULES],
  exports: [MatAppComponent, MatAppBarComponent, MatAppBodyComponent, ...MATERIAL_MODULES]
})
export class MaterialPlusModule {
}
