import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'paginator-component',
  templateUrl: './paginator.component.html',
  standalone: true
})
export class PaginatorComponent {
  @Input({ required: true }) range: number[] = [0, 6]
  @Output() rangeSelector = new EventEmitter<string>
  nextRange() {
    this.rangeSelector.emit('next')
    console.log('emitted next')
  }
  previouseRange() {
    this.rangeSelector.emit('previouse')
    console.log('emitted previouse')
  }


}
