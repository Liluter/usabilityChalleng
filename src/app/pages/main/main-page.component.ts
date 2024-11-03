import { Component, inject, signal } from "@angular/core";
import { FooterComponent } from "../../components/UI/footer/footer.component";
import { ListComponent } from "../../components/UI/List/list.component";
import { ArticlesService } from "../../services/articles.service";
import { AsyncPipe } from "@angular/common";
import { FooterData } from "../../models/footerData.inteface";
import { FormModes } from "../../models/enums";
import { FormComponent } from "../../components/forms/form.component";
import { NavbarComponent } from "../../components/UI/navbar/navbar.component";
import { Observable } from "rxjs";
import { ViewModel } from "../../models/viewModel.interface";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  standalone: true,
  imports: [FooterComponent, ListComponent, AsyncPipe, FormComponent, NavbarComponent]
})
export class MainPageComponent {
  private readonly api = inject(ArticlesService)
  readonly allArticles$: Observable<ViewModel[]> = this.api.getAllArticles()
  showFormSignal = signal(FormModes.show)

  footerData: FooterData = {
    linkAlias: "Lowgular",
    linkHref: "http://www.lowgular.io",
    copyrightText: "Karol Awdziewicz PL, Inc."
  }
  formModes = FormModes
  viewData?: ViewModel
  openForm(data: [FormModes, ViewModel?]) {
    if (data[0] === FormModes.create) {
      this.showFormSignal.set(FormModes.create)
    } else if (data[0] === FormModes.edit) {
      this.showFormSignal.set(FormModes.edit)
      if (data[1]) {
        this.viewData = { ...data[1] }
      }
    }
  }
  closeForm() {
    this.showFormSignal.set(FormModes.show)
  }
  onSubmit(event: [FormModes, ViewModel]) {
    console.log(event)
    const actualDate = new Date().toISOString()
    if (event[0] === FormModes.create) {
      let data: ViewModel = {
        content: event[1].content,
        createdAt: actualDate,
        imageUrl: event[1].imageUrl,
        title: event[1].title,
      }
      this.api.postArticle(data).subscribe(res => {
        this.closeForm()
      }, (error: HttpErrorResponse) => {
        console.log('Error', error.error)
      })
    }
    if (event[0] === FormModes.edit) {
      let data: ViewModel = {
        content: event[1].content,
        createdAt: event[1].createdAt,
        imageUrl: event[1].imageUrl,
        title: event[1].title,
        id: event[1].id
      }
      this.api.putArticle(data).subscribe(res => {
        this.closeForm()
      }, (error: HttpErrorResponse) => {
        console.log('Error', error.error)
      })
    }
  }
}