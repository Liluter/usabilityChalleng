import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { articlesUrl } from "../varibles/url";
import { ArticleElement } from "../types/article.interface";

@Injectable({ providedIn: "root" })
export class ApiService {
  http = inject(HttpClient)

  getAllArticles() {
    return this.http.get<ArticleElement[]>(articlesUrl)
  }
  postArticle(data: ArticleElement) {
    return this.http.post(articlesUrl, data)
  }
  deleteArticle(id: string) {
    return this.http.delete(articlesUrl + '/' + id)
  }
  putArticle(data: ArticleElement) {
    return this.http.put(articlesUrl + '/' + data.id, data)

  }
}