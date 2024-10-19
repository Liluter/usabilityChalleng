import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'create-form',
  templateUrl: './createForm.component.html',
  styleUrl: './createForm.component.scss',
  standalone: true
})
export class CreateFormComponent {
  @Output() modalHandler: EventEmitter<string> = new EventEmitter

  closeModal(event: Event) {
    event.stopImmediatePropagation()
    this.modalHandler.emit('close')
  }
}
