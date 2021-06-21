import { Modal } from './components/modal/modal.model';
import { ModalService } from './components/modal/modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  async openModal() {
    return await this.modalService.openModal();
  }

  public modalConfig: Modal = {
    modalTitle: 'relatar problemas',
    onDismiss: () => {
      return true;
    },
    onClose: () => {
      alert('Baixando...');
      return true;
    },
    closeButtonLabel: 'Baixar PDF',
    disableCloseButton: () => {
      return true;
    },
  };
}
