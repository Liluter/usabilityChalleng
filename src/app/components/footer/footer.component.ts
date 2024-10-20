import { Component, Input } from "@angular/core";
import { FooterData } from "../../types/footerData.inteface";

@Component({
  selector: 'footer-comp',
  templateUrl: './footer.component.html',
  standalone: true,
})
export class FooterComponent {
  actualYear = new Date(Date.now()).getFullYear()
  @Input({ required: true }) data!: FooterData
}