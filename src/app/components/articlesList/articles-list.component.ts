import { Component, EventEmitter, Input, Output, signal, WritableSignal } from '@angular/core';
import { AsyncPipe, JsonPipe, NgClass } from '@angular/common';
import { ArticleComponent } from '../articleCard/article.component';
import { ArticleElement } from '../../types/article.interface';
import { ArticleImageComponent } from "../articleImage/article-image.component";
import { PaginatorComponent } from "../paginator/paginator.component";
import { FormModes } from "../../types/enums"
@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, ArticleComponent, NgClass, ArticleImageComponent, PaginatorComponent]
})
export class ArticlesListComponent {
  @Input({ required: true }) articleList: ArticleElement[] = []
  @Output() openFormHandler = new EventEmitter<FormModes>
  showImage: WritableSignal<number> = signal(0)
  articleRange = signal([0, 5])
  formModes = FormModes
  toggleImg(newId: number) {
    this.showImage.update(oldId => oldId === newId ? 0 : newId)
  }
  validationUrl(url: string) {
    return url.includes('http') || url == '' ? true : false
  }

  selectRange(event: string) {
    if (event === 'next') {
      this.nextRange()
    } else if (event === 'previouse') {
      this.previouseRange()
    }
  }
  nextRange() {
    if (this.articleRange()[1] <= 100) {
      this.articleRange.update(range => [range[0] + 6, range[1] + 6])
    }
  }
  previouseRange() {
    if (this.articleRange()[0] != 0) {
      this.articleRange.update(range => [range[0] - 6, range[1] - 6])
    }
  }
  showForm(mode: FormModes) {
    this.openFormHandler.emit(mode)
  }
}
