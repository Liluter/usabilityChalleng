import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ArticleComponent } from '../../article/article.component';
import { ApiService } from '../../../services/api.service';
import { ArticleElement } from '../../../types/article.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { FormModes } from '../../../types/enums';

@Component({
  selector: 'create-form',
  templateUrl: './createForm.component.html',
  styleUrl: './createForm.component.scss',
  standalone: true,
  imports: [FormsModule, ArticleComponent]
})
export class CreateFormComponent {
  _mode: FormModes = FormModes.show
  title: string = ''
  api = inject(ApiService)
  @Input() set mode(value: FormModes) {
    this._mode = value;
    this.title = this.getTitleForMode(value)
  }

  @Input() lastArticleNo!: string | null | undefined
  @Output() modalHandler: EventEmitter<string> = new EventEmitter
  @Input() set editableData(value: ArticleElement | undefined) {
    this.article = {
      ...value,
      title: value?.title ?? 'Your Title',
      content: value?.content ?? 'Your Content',
      imageUrl: value?.imageUrl ?? 'Your Image'
    }
  }
  article = {
    title: 'Your Title',
    content: 'Your Content',
    imageUrl: 'Your Image'
  }
  closeModal(event: Event) {
    event.stopImmediatePropagation()
    this.modalHandler.emit('close')
  }
  submitForm(formObject: NgForm) {
    console.log('submit form')
    let actualData = new Date().toISOString()
    let data: ArticleElement
    if (this._mode === FormModes.create) {
      data = {
        article: {
          content: this.article.content,
          imageUrl: this.article.imageUrl,
          title: this.article.title
        },
        content: this.article.content,
        createdAt: actualData,
        imageUrl: this.article.imageUrl,
        title: this.article.title,
        data: {
          content: this.article.content,
          imageUrl: this.article.imageUrl,
          title: this.article.title
        }

      }
    } else if (this._mode === FormModes.edit) {
      data = this.article
      console.log('form', formObject)
      console.log('model', data)
      this.api.putArticle(data).subscribe(res => {
        this.modalHandler.emit('close')
      }, (error: HttpErrorResponse) => {
        console.log('Error', error.error)
      })
    }
  }
  deleteLast() {
    console.log(this.lastArticleNo)
    if (this.lastArticleNo)
      this.api.deleteArticle(this.lastArticleNo).subscribe(res => {
        this.modalHandler.emit('close')
      }, (error: HttpErrorResponse) => {
        console.log('Error', error.error)
      })
  }
  private getTitleForMode(mode: FormModes): string {
    switch (mode) {
      case FormModes.create:
        return 'Create Mode';
        break;
      case FormModes.edit:
        return 'Edit Mode';
        break;
      default: return 'None Title'
    }
  }
}
