import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'create-form',
  templateUrl: './createForm.component.html',
  styleUrl: './createForm.component.scss',
  standalone: true,
  imports: [FormsModule]
})
export class CreateFormComponent {
  @Output() modalHandler: EventEmitter<string> = new EventEmitter

  article = {
    name: '',
    content: '',
    imageUrl: ''
  }

  closeModal(event: Event) {
    event.stopImmediatePropagation()
    this.modalHandler.emit('close')
  }
  submitForm(formObject: NgForm) {
    console.log('form', formObject)
    console.log('model', this.article)
  }

}
