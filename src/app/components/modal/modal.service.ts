import { Modal, ModalState } from './modal.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isOpen: boolean = false;

  isOpenChange: Subject<ModalState> = new Subject<ModalState>();

  constructor() {}

  openModal(modalConfig: Modal) {
    window.scrollTo(0, 0);
    this.isOpenChange.next({ state: true, id: modalConfig.id });
    document.body.style.overflow = 'hidden';
  }

  closeModal(modalConfig: Modal) {
    this.isOpenChange.next({ state: false, id: modalConfig.id });
    document.body.style.overflow = 'auto';
  }

  dismissModal(modalConfig: Modal) {
    this.isOpenChange.next({ state: false, id: modalConfig.id });
    document.body.style.overflow = 'auto';
  }
}
