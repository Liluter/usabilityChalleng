import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { ArticleImageComponent } from "../articleImage/article-image.component";
import { ArticleElement } from '../../types/article.interface';

@Component({
  selector: 'article-comp',
  templateUrl: './article.component.html',
  standalone: true,
  imports: [ArticleImageComponent]
})
export class ArticleComponent {
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

  @Input() imageUrl: string = ''

  @Input({
    transform: (value: string) => {
      return value ? value : ''
    },
  }) articleId: string = ''


  @Output() editModalHandler: EventEmitter<ArticleElement> = new EventEmitter
  showImage = signal(true)
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
    console.log(articleData)
  }
}

