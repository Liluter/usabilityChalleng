import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { FormModes } from "../../models/enums"
import { ViewModel } from '../../models/viewModel.interface';
@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  standalone: true,
  imports: [ArticleComponent]
})
export class ArticlesListComponent {
  @Input() articleList: ViewModel[] | null | undefined = []
  @Output() editEvent = new EventEmitter<[FormModes, ViewModel?]>

  onEditEvent(article: ViewModel) {
    this.editEvent.emit([FormModes.edit, article])
  }
}
