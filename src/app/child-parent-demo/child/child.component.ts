import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() parentString: string = '';

  inputString: string = '';
  @Output() emitter = new EventEmitter<string>();

  onKeyDown() {
    console.log(this.inputString);
    this.emitter.emit(this.inputString);
  }
}
