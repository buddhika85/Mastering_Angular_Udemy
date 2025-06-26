import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, NgIf],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  showChild = true;
  inputValue = 'initial';

  changeValue() {
    this.inputValue += '!';
  }

  toggle() {
    this.showChild = !this.showChild;
  }
}
