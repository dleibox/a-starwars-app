import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog, MatBottomSheet, MatDialogConfig, MatSidenav } from '@angular/material';
import { AppBottomsheetComponent } from './app-bottomsheet.component';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'A Star Wars App';

  sbs: Subscription;

  @ViewChild('leftSide', { static: false }) leftSide: MatSidenav;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(cd: ChangeDetectorRef, media: MediaMatcher, private dialog: MatDialog, private bottomSheet: MatBottomSheet, private router: Router) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    const closeSide = () => {
      this.mobileQuery.matches && this.leftSide.close();
    }
    this._mobileQueryListener = () => {
      closeSide();
      cd.detectChanges();
    };
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.sbs = router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        // if(e.url === ...)
        closeSide();
      }
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.sbs.unsubscribe();
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
