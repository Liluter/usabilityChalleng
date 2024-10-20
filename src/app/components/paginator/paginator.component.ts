import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'paginator-component',
  templateUrl: './paginator.component.html',
  standalone: true
})
export class PaginatorComponent {
  @Input({ required: true }) range: number[] = [0, 6]
  @Output() rangeSelector = new EventEmitter<string>
  firstInRange() {
    this.rangeSelector.emit('first')
  }
  nextRange() {
    this.rangeSelector.emit('next')
  }
  previouseRange() {
    this.rangeSelector.emit('previouse')
  }

  lastInRange() {
    this.rangeSelector.emit('last')

  }
}
