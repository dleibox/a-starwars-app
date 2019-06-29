import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatBadgeModule, MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatCheckboxModule, MatRadioModule, MatListModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatMenuModule, MatDialogModule, MatBottomSheetModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [],
  imports: [
    OverlayModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule, MatIconModule, MatBadgeModule,
    MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatCheckboxModule, MatRadioModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    // MatGridListModule,
    MatMenuModule,
    MatDialogModule, MatBottomSheetModule,
  ],
  exports: [
    OverlayModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule, MatIconModule, MatBadgeModule,
    MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatCheckboxModule, MatRadioModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatMenuModule,
    MatDialogModule, MatBottomSheetModule,
  ],
})
export class AppMaterialModule { }
