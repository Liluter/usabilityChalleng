import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-btn',
  standalone: true,
  imports: [],
  templateUrl: './my-btn.component.html',
  styleUrl: './my-btn.component.scss'
})
export class MyBtnComponent {
  @Input() eventData: string = ''
  @Input() content: string = 'click'
  @Input() extraClass: string = ''
  @Output() btnClick: EventEmitter<string> = new EventEmitter
  onClick() {
    this.btnClick.emit(this.eventData)
  }
}
