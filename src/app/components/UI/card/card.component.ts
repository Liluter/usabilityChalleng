import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormModes } from '../../../models/enums';
import { MyBtnComponent } from '../my-btn/my-btn.component';
import { ViewModel } from '../../../models/viewModel.interface';

@Component({
  selector: 'card-comp',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [MyBtnComponent]
})
export class CardComponent {
  disableBtn: boolean = false
  showImage = signal(true)
  _data: ViewModel = {
    content: 'lack of content :(',
    imageUrl: 'Your Image',
    title: 'no title :(',
    id: ''
  }

  @Input() set mode(value: FormModes) {
    this.disableBtn = (value === FormModes.edit || value === FormModes.create)
  }

  @Input() set article(value: ViewModel) {
    this._data = { ...value }
  }

  @Output() editEvent: EventEmitter<void> = new EventEmitter

  toggleImage() {
    this.showImage.update(bool => bool = !bool)
  }
  validationUrl() {
    if (this._data.imageUrl) {
      if (this._data.imageUrl.includes('http') && this._data.imageUrl.length >= 10) {
        return true
      } else if (this._data.imageUrl === 'Your Image') {
        return true
      } else return false
    }
    return false
  }
  edit() {
    this.editEvent.emit()
  }
}

