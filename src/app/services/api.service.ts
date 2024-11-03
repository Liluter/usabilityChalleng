import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { articlesUrl } from "../varibles/url";
import { DataModel } from "../models/data.interface";
import { map, Observable } from "rxjs";
import { ViewModel } from "../models/viewModel.interface";

@Injectable({ providedIn: "root" })
export class ApiService {
  http = inject(HttpClient)

  getAllArticles(): Observable<ViewModel[]> {
    return this.http.get<DataModel[]>(articlesUrl).pipe(map((data: DataModel[]) => data.map<ViewModel>((item: DataModel) => (
      { content: item.content, createdAt: item.createdAt, id: item.id, title: item.title, imageUrl: item.imageUrl })
    )))
  }
  postArticle(data: ViewModel) {
    return this.http.post(articlesUrl, data)
  }
  // deleteArticle(id: string) {
  //   return this.http.delete(articlesUrl + '/' + id)
  // }
  putArticle(data: ViewModel) {
    return this.http.put(articlesUrl + '/' + data.id, data)
  }
}