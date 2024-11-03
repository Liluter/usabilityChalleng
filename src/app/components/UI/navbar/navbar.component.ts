import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormModes } from "../../../models/enums";

@Component({
  selector: 'navbar-comp',
  templateUrl: './navbar.component.html',
  standalone: true,
})
export class NavbarComponent {
  @Input() title: string = 'No Title'
  @Input() buttonContent: string = 'click';
  @Output() buttonClick: EventEmitter<FormModes> = new EventEmitter;
  buttonHandler() {
    this.buttonClick.emit(FormModes.create)
  }
}