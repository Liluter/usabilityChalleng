import { Component, inject } from "@angular/core";
import { FooterComponent } from "../../components/footer/footer.component";
import { ArticlesListComponent } from "../../components/articlesList/articles-list.component";
import { ApiService } from "../../services/api.service";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  standalone: true,
  imports: [FooterComponent, ArticlesListComponent, AsyncPipe]
})
export class MainPageComponent {
  api = inject(ApiService)
  allArticles$ = this.api.getAllArticles()
}