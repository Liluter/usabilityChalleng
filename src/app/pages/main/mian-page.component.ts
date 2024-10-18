import { Component, inject } from "@angular/core";
import { FooterComponent } from "../../components/footer/footer.component";
import { ArticlesListComponent } from "../../components/articlesList/articles-list.component";
import { ApiService } from "../../services/api.service";
import { AsyncPipe } from "@angular/common";
import { FooterData } from "../../types/footerData.inteface";

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  standalone: true,
  imports: [FooterComponent, ArticlesListComponent, AsyncPipe]
})
export class MainPageComponent {
  private readonly api = inject(ApiService)
  readonly allArticles$ = this.api.getAllArticles()

  footerData: FooterData = {
    linkAlias: "Lowgular",
    linkHref: "http://www.lowgular.io",
    copyrightText: "Karol Awdziewicz PL, All rights reserved."
  }
}