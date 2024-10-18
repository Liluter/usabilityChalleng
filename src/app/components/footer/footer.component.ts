import { Component, Input } from "@angular/core";
import { FooterData } from "../../types/footerData.inteface";

@Component({
  selector: 'footer-comp',
  templateUrl: './footer.component.html',
  standalone: true,
})
export class FooterComponent {
  @Input({ required: true }) data!: FooterData

  actualYear = new Date(Date.now()).getFullYear()

}