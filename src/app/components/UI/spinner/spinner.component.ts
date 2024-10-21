import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

export enum Sizes {
  small = 's',
  medium = 'm',
  large = 'l',
  extralarge = 'xl'
}

@Component({
  selector: 'spinner-comp',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  standalone: true,
  imports: [NgClass]
})
export class SpinnerComponent {
  _size: Sizes = Sizes.small
  @Input() set size(value: Sizes) {
    this._size = value
  }

  selectSize(size: Sizes) {
    switch (size) {
      case Sizes.small: return 'w5h5rem'
      case Sizes.medium: return 'w10h10rem'
      case Sizes.large: return 'w20h20rem'
      case Sizes.extralarge: return 'w30h30rem'
      default: return ''
    }
  }

}

