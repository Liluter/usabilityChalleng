import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-btn',
  standalone: true,
  imports: [],
  templateUrl: './my-btn.component.html',
  styleUrl: './my-btn.component.scss'
})
export class MyBtnComponent {
  @Input() extraClass: string = ''
  @Input() disable: boolean = false
  @Input() function: string = 'button'
  @Output() btnClick: EventEmitter<string> = new EventEmitter

  onClick(event: Event) {
    this.btnClick.emit()
  }
}
