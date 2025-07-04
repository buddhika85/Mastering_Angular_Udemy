import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  message: string = 'This is coming from Parent, X, Y, Z ...';
  messageFromChild: string = '';

  onReceiveMessage(value: string) {
    this.messageFromChild = value;
  }
}
