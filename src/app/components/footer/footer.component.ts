import { Component, Input } from "@angular/core";

@Component({
  selector: 'footer-comp',
  templateUrl: './footer.component.html',
  standalone: true,
})
export class FooterComponent {
  @Input() linkAlias: string = '';
  @Input() linkHref: string = '';
  @Input() copyrightText: string = '';

  actualYear = new Date(Date.now()).getFullYear()

}