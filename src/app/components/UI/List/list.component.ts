import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FormModes } from "../../../models/enums"
import { ViewModel } from '../../../models/viewModel.interface';
@Component({
  selector: 'list-comp',
  templateUrl: './list.component.html',
  standalone: true,
  imports: [CardComponent]
})
export class ListComponent {
  @Input() itemsList: ViewModel[] | null | undefined = []
  @Output() editEvent = new EventEmitter<[FormModes, ViewModel?]>
  onEditEvent(item: ViewModel) {
    this.editEvent.emit([FormModes.edit, item])
  }
}
