import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'paginator-component',
  templateUrl: './paginator.component.html',
  standalone: true
})
export class PaginatorComponent {
  @Input({ required: true }) range!: number[]
  @Input() numberOfArticles: number = 0
  @Output() rangeSelector: EventEmitter<string> = new EventEmitter

  firstInRange() {
    this.rangeSelector.emit('first')
  }
  nextRange() {
    if (this.range[1] <= this.numberOfArticles - 3) {
      this.rangeSelector.emit('next')
    }
  }
  previouseRange() {
    this.rangeSelector.emit('previouse')
  }
  lastInRange() {
    this.rangeSelector.emit('last')
  }
}
