import { Component } from "@angular/core";
import { FooterComponent } from "../../components/footer/footer.component";
import { ArticlesList } from "../../components/articlesList/articles-list.component";

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  standalone: true,
  imports: [FooterComponent, ArticlesList]
})
export class MainPageComponent {

}