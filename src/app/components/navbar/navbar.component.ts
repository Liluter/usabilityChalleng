import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormModes } from "../../types/enums";

@Component({
  selector: 'navbar-comp',
  templateUrl: './navbar.component.html',
  standalone: true,
})
export class NavbarComponent {
  @Input() title: string = 'No Title'
  @Input() buttonContent: string = 'click';
  @Input() buttonEventSelector: FormModes = FormModes.create
  @Output() buttonEvent: EventEmitter<FormModes> = new EventEmitter;
  buttonHandler() {
    this.buttonEvent.emit(this.buttonEventSelector)
  }
}