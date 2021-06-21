import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Modal } from './modal.model';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  isOpen: boolean = false;
  @Input() public modalConfig: Modal;
  @ViewChild('modal') modal: ElementRef;
  @ViewChild('background') background: ElementRef;

  constructor(private modalService: ModalService, private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (
        e.target !== this.modal?.nativeElement &&
        e.target === this.background?.nativeElement
      ) {
        this.dismiss();
      }
    });
  }

  ngOnInit(): void {
    this.modalService.isOpenChange.subscribe((value) => {
      this.isOpen = value;
    });
    console.log(this.modalConfig.hideCloseButton);
  }

  openModal() {
    this.modalService.openModal();
  }

  async close(): Promise<void> {
    if (
      this.modalConfig.shouldClose === undefined ||
      (await this.modalConfig.shouldClose())
    ) {
      const result =
        this.modalConfig.onClose === undefined ||
        (await this.modalConfig.onClose());
      this.modalService.closeModal(result);
    }
  }

  async dismiss(): Promise<void> {
    if (
      this.modalConfig.shouldDismiss === undefined ||
      (await this.modalConfig.shouldDismiss())
    ) {
      const result =
        this.modalConfig.onDismiss === undefined ||
        (await this.modalConfig.onDismiss());
      this.modalService.dismissModal(result);
    }
  }

  // @HostListener('document:click', ['$event.target'])
  // onOutOfModalClick(event: any): void {
  //   if (!this.elementRef.nativeElement.contains(event)) {
  //     this.close();
  //   }
  // }
}
