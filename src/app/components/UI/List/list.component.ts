import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArticleComponent } from '../../article/article.component';
import { FormModes } from "../../../models/enums"
import { ViewModel } from '../../../models/viewModel.interface';
@Component({
  selector: 'articles-list',
  templateUrl: './list.component.html',
  standalone: true,
  imports: [ArticleComponent]
})
export class ListComponent {
  @Input() itemsList: ViewModel[] | null | undefined = []
  @Output() editEvent = new EventEmitter<[FormModes, ViewModel?]>

  onEditEvent(item: ViewModel) {
    this.editEvent.emit([FormModes.edit, item])
  }
}
