import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { AsyncPipe, JsonPipe, NgClass } from '@angular/common';
import { ArticleComponent } from '../article/article.component';
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
  @Output() openFormHandler = new EventEmitter<[FormModes, ArticleElement?]>
  articleRange = signal([0, 2])
  formModes = FormModes

  selectRange(event: string) {
    if (event === 'next') {
      this.nextRange()
    } else if (event === 'previouse') {
      this.previouseRange()
    } else if (event === 'last') {
      this.lastInRange()
    } else if (event === 'first') {
      this.firstInRange()
    }
  }
  firstInRange() {
    this.articleRange.update((range) => [0, 3])
  }
  nextRange() {
    if (this.articleRange()[1] <= 100) {
      this.articleRange.update(range => [range[0] + 3, range[1] + 3])
    }
  }
  previouseRange() {
    if (this.articleRange()[0] != 0) {
      this.articleRange.update(range => [range[0] - 3, range[1] - 3])
    }
  }
  lastInRange() {
    this.articleRange.update(range => [this.articleList.length - 3, this.articleList.length - 1])
  }
  showForm(data: [FormModes, ArticleElement?]) {
    this.openFormHandler.emit(data)
  }
}
