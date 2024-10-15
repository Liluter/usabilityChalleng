import { Component } from "@angular/core";
import { FooterComponent } from "../../components/footer.component";

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  standalone: true,
  imports: [FooterComponent]
})
export class MainPageComponent {

}