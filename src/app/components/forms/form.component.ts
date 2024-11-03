import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from '../article/article.component';
import { ApiService } from '../../services/api.service';
import { DataModel } from '../../models/data.interface';
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
  title: string = ''
  article = {
    title: 'Your Title',
    content: 'Your Content',
    imageUrl: 'Your Image',
    id: ''
  }

  @Input() set mode(value: FormModes) {
    this._mode = value;
    this.title = this.getTitleForMode(value)
  }
  @Input() lastArticleNo!: string | null | undefined
  @Output() modalHandler: EventEmitter<string> = new EventEmitter
  @Input() set editableData(value: ViewModel | undefined) {
    this.article = {
      ...value,
      title: value?.title ?? this.article.title,
      content: value?.content ?? this.article.content,
      imageUrl: value?.imageUrl ?? this.article.imageUrl,
      id: value?.id ?? this.article.id,
    }
  }

  close() {
    // event.stopImmediatePropagation()
    this.modalHandler.emit('close')
  }
  submitForm() {
    const actualData = new Date().toISOString()
    let data: ViewModel
    if (this._mode === FormModes.create) {
      data = {
        content: this.article.content,
        createdAt: actualData,
        imageUrl: this.article.imageUrl,
        title: this.article.title,
      }
      this.postArticle(data)
    } else if (this._mode === FormModes.edit) {
      this.putArticle(this.article)
    }
  }
  // deleteOne() {
  //   this.api.deleteArticle(this.article.id).subscribe((res: any) => {
  //     this.modalHandler.emit('close')
  //   }, (error: HttpErrorResponse) => {
  //     console.log('Error', error.error)
  //   })
  // }
  postArticle(data: ViewModel) {
    this.api.postArticle(data).subscribe(res => {
      this.modalHandler.emit('close')
    }, (error: HttpErrorResponse) => {
      console.log('Error', error.error)
    })
  }
  putArticle(data: ViewModel) {
    this.api.putArticle(data).subscribe(res => {
      this.modalHandler.emit('close')
    }, (error: HttpErrorResponse) => {
      console.log('Error', error.error)
    })
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
