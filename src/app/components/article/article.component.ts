import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormModes } from '../../models/enums';
import { MyBtnComponent } from '../UI/my-btn/my-btn.component';
import { ViewModel } from '../../models/viewModel.interface';

@Component({
  selector: 'article-comp',
  templateUrl: './article.component.html',
  standalone: true,
  imports: [MyBtnComponent]
})
export class ArticleComponent {
  disableBtn: boolean = false
  showImage = signal(true)
  _article: ViewModel = {
    content: 'lack of content :(',
    imageUrl: 'Your Image',
    title: 'no title :(',
    id: ''
  }

  @Input() set mode(value: FormModes) {
    this.disableBtn = (value === FormModes.edit || value === FormModes.create)
  }

  @Input() set article(value: ViewModel) {
    this._article = { ...value }
  }

  @Output() editEvent: EventEmitter<void> = new EventEmitter

  toggleImage() {
    this.showImage.update(bool => bool = !bool)
  }
  validationUrl() {
    if (this._article.imageUrl) {
      if (this._article.imageUrl.includes('http') && this._article.imageUrl.length >= 10) {
        return true
      } else if (this._article.imageUrl === 'Your Image') {
        return true
      } else return false
    }
    return false
  }
  edit() {
    this.editEvent.emit()
  }
}

