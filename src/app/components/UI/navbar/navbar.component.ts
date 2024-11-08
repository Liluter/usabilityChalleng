import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormModes } from "../../../models/enums";
import { MyBtnComponent } from "../my-btn/my-btn.component";

@Component({
  selector: 'navbar-comp',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [MyBtnComponent]
})
export class NavbarComponent {
  formModes = FormModes
  @Input() title: string = 'No Title'
  @Output() buttonClick: EventEmitter<FormModes> = new EventEmitter;
  buttonHandler(data: FormModes) {
    this.buttonClick.emit(data)
  }
}