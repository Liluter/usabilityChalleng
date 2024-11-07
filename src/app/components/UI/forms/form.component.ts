import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { MyBtnComponent } from "../my-btn/my-btn.component";
import { ViewModel } from '../../../models/viewModel.interface';
import { FormModes } from '../../../models/enums';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  standalone: true,
  imports: [FormsModule, CardComponent, MyBtnComponent]
})
export class FormComponent {
  formModes = FormModes
  _mode: FormModes = FormModes.show
  _data: ViewModel = {
    title: 'Your Title',
    content: 'Your Content',
    imageUrl: 'Your Image',
    id: ''
  }
  @Input() set mode(value: FormModes) {
    this._mode = value;
  }
  @Input() title: string = ''
  @Input() set formData(value: ViewModel | undefined) {
    this._data = { ...this._data, ...value }
  }
  @Input() itemsType: string = ''
  @Output() closeEvent: EventEmitter<void> = new EventEmitter
  @Output() submitEvent: EventEmitter<[FormModes, ViewModel]> = new EventEmitter

  close() {
    this.closeEvent.emit()
  }

  submitForm() {
    if (this._mode === FormModes.create) {
      this.submitEvent.emit([FormModes.create, this._data])
    } else if (this._mode === FormModes.edit) {
      this.submitEvent.emit([FormModes.edit, this._data])
    }
  }

  refreshData() {
    this._data = { ...this._data }
  }
}
