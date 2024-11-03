import { Component, inject, signal } from "@angular/core";
import { FooterComponent } from "../../components/UI/footer/footer.component";
import { ArticlesListComponent } from "../../components/articlesList/articles-list.component";
import { ApiService } from "../../services/api.service";
import { AsyncPipe } from "@angular/common";
import { FooterData } from "../../models/footerData.inteface";
import { FormModes } from "../../models/enums";
import { FormComponent } from "../../components/forms/form.component";
import { ArticleElement } from "../../models/article.interface";
import { Sizes, SpinnerComponent } from "../../components/UI/spinner/spinner.component";
import { NavbarComponent } from "../../components/UI/navbar/navbar.component";

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  standalone: true,
  imports: [FooterComponent, ArticlesListComponent, AsyncPipe, FormComponent, SpinnerComponent, NavbarComponent]
})
export class MainPageComponent {
  private readonly api = inject(ApiService)
  readonly allArticles$ = this.api.getAllArticles()
  showFormSignal = signal(FormModes.show)

  footerData: FooterData = {
    linkAlias: "Lowgular",
    linkHref: "http://www.lowgular.io",
    copyrightText: "Karol Awdziewicz PL, All rights reserved."
  }
  formModes = FormModes
  sizes = Sizes
  editArticleData?: ArticleElement
  openModal(data: [FormModes, ArticleElement?]) {
    if (data[0] === FormModes.create) {
      this.showFormSignal.set(FormModes.create)
    } else if (data[0] === FormModes.edit) {
      this.showFormSignal.set(FormModes.edit)
      if (data[1]) {
        this.editArticleData = { ...data[1] }
      }
    }
  }
  closeModal() {
    this.showFormSignal.set(FormModes.show)
  }
}