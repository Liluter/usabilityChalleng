import { Component, Input, OnInit } from '@angular/core';
import { ArticleElement } from '../../types/article.interface';

@Component({
  selector: 'article-image',
  templateUrl: './article-image.component.html',
  standalone: true
})
export class ArticleImageComponent {
  @Input() url: string = ''
  @Input() title: string = ''
}
