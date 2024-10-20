import { Component, Input } from '@angular/core';

@Component({
  selector: 'article-image',
  templateUrl: './article-image.component.html',
  standalone: true
})
export class ArticleImageComponent {
  @Input() url: string = ''
  @Input() title: string = ''
}
