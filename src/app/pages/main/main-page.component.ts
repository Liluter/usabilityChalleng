import { Component, inject, signal } from "@angular/core";
import { FooterComponent } from "../../components/footer/footer.component";
import { ArticlesListComponent } from "../../components/articlesList/articles-list.component";
import { ApiService } from "../../services/api.service";
import { AsyncPipe } from "@angular/common";
import { FooterData } from "../../types/footerData.inteface";
import { FormModes } from "../../types/enums";
import { CreateFormComponent } from "../../components/forms/createForm/createForm.component";
import { ArticleElement } from "../../types/article.interface";
import { Sizes, SpinnerComponent } from "../../components/spinner/spinner.component";

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  standalone: true,
  imports: [FooterComponent, ArticlesListComponent, AsyncPipe, CreateFormComponent, SpinnerComponent]
})
export class MainPageComponent {
  private readonly api = inject(ApiService)
  readonly allArticles$ = this.api.getAllArticles()
  showForm = signal(FormModes.show)

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
      this.showForm.set(FormModes.create)
    } else if (data[0] === FormModes.edit) {
      this.showForm.set(FormModes.edit)
      if (data[1]) {
        this.editArticleData = { ...data[1] }
      }
    }
  }
  closeModal() {
    this.showForm.set(FormModes.show)
  }

}