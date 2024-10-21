import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { AsyncPipe, JsonPipe, NgClass } from '@angular/common';
import { ArticleComponent } from '../article/article.component';
import { ArticleElement } from '../../models/article.interface';
import { ArticleImageComponent } from "../UI/articleImage/article-image.component";
import { PaginatorComponent } from "../UI/paginator/paginator.component";
import { FormModes } from "../../models/enums"
import { NavbarComponent } from "../UI/navbar/navbar.component";
import { Sizes, SpinnerComponent } from "../UI/spinner/spinner.component";
@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, ArticleComponent, NgClass, ArticleImageComponent, PaginatorComponent, NavbarComponent, SpinnerComponent]
})
export class ArticlesListComponent {
  @Input({ required: true }) articleList: ArticleElement[] = []
  @Output() openFormHandler = new EventEmitter<[FormModes, ArticleElement?]>
  articleRange = signal([0, 2])
  formModes = FormModes
  sizes = Sizes
  selectRange(event: string) {
    switch (event) {
      case 'first': this.firstInRange(); break;
      case 'previouse': this.previouseRange(); break;
      case 'next': this.nextRange(); break;
      case 'last': this.lastInRange(); break;
    }
  }
  firstInRange() {
    this.articleRange.update((range) => [0, 2])
  }
  nextRange() {
    this.articleRange.update((range) => [range[0] + 3, range[1] + 3])
  }
  previouseRange() {
    if (this.articleRange()[0] != 0) {
      this.articleRange.update((range) => [range[0] - 3, range[1] - 3])
    }
  }
  lastInRange() {
    this.articleRange.update((range) => [this.articleList.length - 3, this.articleList.length - 1])
  }
  showForm(data: [FormModes, ArticleElement?]) {
    this.openFormHandler.emit(data)
  }
}
