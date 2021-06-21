import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isOpen: boolean = false;

  isOpenChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.isOpenChange.subscribe((value) => {
      this.isOpen = value;
    });
  }

  openModal() {
    window.scrollTo(0, 0);
    this.isOpenChange.next(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal(close: boolean) {
    if (close) {
      this.isOpenChange.next(false);
      document.body.style.overflow = 'auto';
    }
  }

  dismissModal(dismiss: boolean) {
    if (dismiss) {
      this.isOpenChange.next(false);
      document.body.style.overflow = 'auto';
    }
  }
}
