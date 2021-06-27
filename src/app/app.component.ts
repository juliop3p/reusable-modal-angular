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
    return await this.modalService.openModal(this.modalConfig);
  }

  async openModal2() {
    return await this.modalService.openModal(this.modalConfig2);
  }

  public modalConfig: Modal = {
    id: '1',
    modalTitle: 'relatar problemas',
    onDismiss: () => {
      return true;
    },
    onClose: () => {
      alert('Baixando...');
      return true;
    },
    closeButtonLabel: 'Baixar PDF',
  };

  public modalConfig2: Modal = {
    id: '2',
    modalTitle: 'Testando',
    onDismiss: () => {
      return true;
    },
    onClose: () => {
      alert('Baixando...');
      return true;
    },
    closeButtonLabel: 'Teste',
  };
}
