import { Component, inject, signal } from "@angular/core";
import { FooterComponent } from "../../components/footer/footer.component";
import { ArticlesListComponent } from "../../components/articlesList/articles-list.component";
import { ApiService } from "../../services/api.service";
import { AsyncPipe } from "@angular/common";
import { FooterData } from "../../types/footerData.inteface";
import { FormModes } from "../../types/enums";
import { CreateFormComponent } from "../../components/forms/createForm/createForm.component";

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  standalone: true,
  imports: [FooterComponent, ArticlesListComponent, AsyncPipe, CreateFormComponent]
})
export class MainPageComponent {
  private readonly api = inject(ApiService)
  readonly allArticles$ = this.api.getAllArticles()

  showForm = signal(FormModes.none)

  footerData: FooterData = {
    linkAlias: "Lowgular",
    linkHref: "http://www.lowgular.io",
    copyrightText: "Karol Awdziewicz PL, All rights reserved."
  }

  openModal(mode: FormModes) {
    if (mode === FormModes.crate) {

      console.log('Modal opened in main page in ', mode)
      this.showForm.set(FormModes.crate)
    }
  }
  closeModal() {
    this.showForm.set(FormModes.none)
  }
}