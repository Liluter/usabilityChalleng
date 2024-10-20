import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { ArticleImageComponent } from "../articleImage/article-image.component";
import { ArticleElement } from '../../types/article.interface';
import { FormModes } from '../../types/enums';

@Component({
  selector: 'article-comp',
  templateUrl: './article.component.html',
  standalone: true,
  imports: [ArticleImageComponent]
})
export class ArticleComponent {
  private _mode = FormModes.show
  disableBtns: boolean = false
  showImage = signal(true)

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
    this._mode = value;
    this.disableBtns = (value === FormModes.edit || value === FormModes.create)
  }

  @Output() editModalHandler: EventEmitter<ArticleElement> = new EventEmitter
  // disableBtns = this.mode === 'edit-mode' || this.mode === 'create-mode'
  toggleImage() {
    this.showImage.update(bool => bool = !bool)
  }
  validationUrl() {
    if (this.imageUrl) {
      let cases = (this.imageUrl.includes('http') && this.imageUrl.length >= 10 || this.imageUrl === 'Your Image')
      return cases ? true : false
    } return false
  }

  openEditModal() {
    const articleData: ArticleElement = {
      content: this.content ?? '',
      imageUrl: this.imageUrl ?? '',
      title: this.title ?? '',
      id: this.articleId ?? ''
    }
    this.editModalHandler.emit(articleData)
    console.log('edit opened :', articleData)
  }
}

