import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from '../article/article.component';
import { ApiService } from '../../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormModes } from '../../models/enums';
import { MyBtnComponent } from "../../my-btn/my-btn.component";
import { ViewModel } from '../../models/viewModel.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  standalone: true,
  imports: [FormsModule, ArticleComponent, MyBtnComponent]
})
export class FormComponent {
  api = inject(ApiService)
  _mode: FormModes = FormModes.show
  _title: string = ''
  _article = {
    title: 'Your Title',
    content: 'Your Content',
    imageUrl: 'Your Image',
    id: ''
  }

  @Input() set mode(value: FormModes) {
    this._mode = value;
    this._title = this.getTitleForMode(value)
  }
  @Input() lastArticleNo!: string | null | undefined
  @Input() set formData(value: ViewModel | undefined) {
    this._article = {
      ...value,
      title: value?.title ?? this._article.title,
      content: value?.content ?? this._article.content,
      imageUrl: value?.imageUrl ?? this._article.imageUrl,
      id: value?.id ?? this._article.id,
    }
  }
  @Output() closeEvent: EventEmitter<void> = new EventEmitter
  @Output() submitEvent: EventEmitter<[FormModes, ViewModel]> = new EventEmitter

  close() {
    this.closeEvent.emit()
  }

  submitForm() {
    if (this._mode === FormModes.create) {
      this.submitEvent.emit([FormModes.create, this._article])
    } else if (this._mode === FormModes.edit) {
      this.submitEvent.emit([FormModes.edit, this._article])
    }
  }

  private getTitleForMode(mode: FormModes): string {
    switch (mode) {
      case FormModes.create:
        return 'Create Mode';
      case FormModes.edit:
        return 'Edit Mode';
      default: return 'None Title'
    }
  }
}
