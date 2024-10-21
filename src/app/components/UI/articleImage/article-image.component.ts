import { Component, Input } from '@angular/core';
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
  selector: 'article-image',
  templateUrl: './article-image.component.html',
  standalone: true,
  imports: [SpinnerComponent]
})
export class ArticleImageComponent {
  @Input() url: string = ''
  @Input() title: string = ''
}
