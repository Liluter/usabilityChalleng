import { Component, Input } from '@angular/core';

@Component({
  selector: 'article-comp',
  templateUrl: './article.component.html',
  standalone: true
})
export class ArticleComponent {
  @Input() title?: string
  @Input() content?: string
}
