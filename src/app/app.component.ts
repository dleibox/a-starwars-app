import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog, MatBottomSheet, MatDialogConfig } from '@angular/material';
import { AppBottomsheetComponent } from './app-bottomsheet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A Star Wars App';

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(cd: ChangeDetectorRef, media: MediaMatcher, private dialog: MatDialog, private bottomSheet: MatBottomSheet) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => cd.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  login() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Login form',
      description: 'Preload description',
    };

  }

  openSheet() {
    this.bottomSheet.open(AppBottomsheetComponent, {
      data: {
        items: [
          {
            url: '',
            title: 'Developed by Daniel 2019',
            content: '',
          },
          // {
          //   url: 'https://swapi.co/',
          //   title: 'SWAPI service',
          //   content: '',
          // },
        ]
      }
    });
  }
}
