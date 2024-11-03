import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AsyncPipe, JsonPipe, NgClass } from '@angular/common';
import { ArticleComponent } from '../article/article.component';
import { PaginatorComponent } from "../UI/paginator/paginator.component";
import { FormModes } from "../../models/enums"
import { NavbarComponent } from "../UI/navbar/navbar.component";
import { Sizes, SpinnerComponent } from "../UI/spinner/spinner.component";
import { ViewModel } from '../../models/viewModel.interface';
@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, ArticleComponent, NgClass, PaginatorComponent, NavbarComponent, SpinnerComponent]
})
export class ArticlesListComponent {
  @Input() articleList: ViewModel[] | null | undefined = []
  @Output() openFormHandler = new EventEmitter<[FormModes, ViewModel?]>
  formModes = FormModes
  sizes = Sizes

  showForm(data: [FormModes, ViewModel?]) {
    this.openFormHandler.emit(data)
  }
}
