import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss',
})
export class TemplateDrivenFormComponent {
  user: User = {
    name: '',
    email: '',
  };

  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.user);
  }
}

export interface User {
  name: string;
  email: string;
}
