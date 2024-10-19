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
  @Input() title: string = ''
  @Input() content: string = ''
  @Input() image: ArticleElement | undefined = undefined

  showImage = signal(true)
  toggleImage() {
    this.showImage.update(bool => bool = !bool)
  }
  validationUrl() {
    if (this.image) {
      return this.image.imageUrl.includes('http') || this.image.imageUrl == '' ? true : false
    } return false
  }
}

