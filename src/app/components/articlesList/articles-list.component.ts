import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'articles-list',
  templateUrl: './articles-list.component.html',
  standalone: true,
  imports: [AsyncPipe, JsonPipe]
})
export class ArticlesList {
  api = inject(ApiService)
  allArticles$ = this.api.getAllArticles()

}
