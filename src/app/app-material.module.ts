import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule, MatIconModule, MatBadgeModule, MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatCheckboxModule, MatRadioModule, MatListModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatMenuModule, MatDialogModule, MatBottomSheetModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
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
