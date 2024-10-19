import { Component, Input, signal } from '@angular/core';
import { ArticleImageComponent } from "../articleImage/article-image.component";
import { ArticleElement } from '../../types/article.interface';

@Component({
  selector: 'article-comp',
  templateUrl: './article.component.html',
  standalone: true,
  imports: [ArticleImageComponent]
})
export class ArticleComponent {
  _title = 'none title :('

  @Input() set title(value: string | null) {
    value ? this._title = value : null
  }
  @Input({
    transform: (value: string | null) => {
      return value ? value : 'none content :('
    },
  }) content?: string
  @Input() imageUrl: string = ''
  @Input({
    transform: (value: string) => {
      return value ? value : 'none image title :('
    },
  }) imageTitle: string = ''

  showImage = signal(true)
  toggleImage() {
    this.showImage.update(bool => bool = !bool)
  }
  validationUrl() {
    if (this.imageUrl) {

      return this.imageUrl.includes('http') || this.imageUrl == '' ? true : false
    } return false
  }
}

