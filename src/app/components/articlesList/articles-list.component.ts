import { Component, inject, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ArticleComponent } from '../articleCard/article.component';
import { ArticleElement } from '../../types/article.interface';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, ArticleComponent]
})
export class ArticlesListComponent {

  @Input({ required: true }) list: ArticleElement[] = []
}
