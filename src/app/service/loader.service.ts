import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { MatSpinner } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private spinnerTopRef: OverlayRef;

  constructor(private overlay: Overlay) {
    this.spinnerTopRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });
  }

  public showSpinner() {
    // console.log("attach")
    this.spinnerTopRef.attach(new ComponentPortal(MatSpinner));
  }

  public stopSpinner() {
    // console.log("dispose")
    this.spinnerTopRef.detach();
  }
}
