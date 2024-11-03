import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { FormModes } from '../../models/enums';
import { MyBtnComponent } from '../../my-btn/my-btn.component';
import { ViewModel } from '../../models/viewModel.interface';



@Component({
  selector: 'article-comp',
  templateUrl: './article.component.html',
  standalone: true,
  imports: [MyBtnComponent]
})
export class ArticleComponent {
  disableBtns: boolean = false
  showImage = signal(true)
  _article: ViewModel = {
    content: 'lack of content :(',
    imageUrl: 'Your Image',
    title: 'no title :('
  }

  @Input({
    transform: (value: string) => {
      return value ? value : 'no title :('
    },
  }) title: string = ''

  @Input({
    transform: (value: string) => {
      return value ? value : 'lack of content :('
    }
  }) content: string = ''

  @Input({
    transform: (value: string) => {
      return value ? value : 'Your Image'
    }
  }) imageUrl: string = ''

  @Input({
    transform: (value: string) => {
      return value ? value : ''
    },
  }) articleId: string = ''

  @Input() set mode(value: FormModes) {
    this.disableBtns = (value === FormModes.edit || value === FormModes.create)
  }

  @Input() set article(value: ViewModel) {
    this._article = { ...value }
  }

  @Output() editModalHandler: EventEmitter<ViewModel> = new EventEmitter

  toggleImage() {
    this.showImage.update(bool => bool = !bool)
  }
  validationUrl() {
    return this.imageUrl ?
      (this.imageUrl.includes('http') && this.imageUrl.length >= 10 || this.imageUrl === 'Your Image') ? true : false
      : false
  }
  openEditModal() {
    const articleData: ViewModel = {
      content: this.content ?? '',
      imageUrl: this.imageUrl ?? '',
      title: this.title ?? '',
      id: this.articleId ?? ''
    }
    this.editModalHandler.emit(articleData)
  }
}

