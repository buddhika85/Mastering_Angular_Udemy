import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-typed-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-typed-form.component.html',
  styleUrl: './reactive-typed-form.component.scss',
})
export class ReactiveTypedFormComponent implements OnInit {
  private userLoginForm: UserLoginForm = { username: '', password: '' };

  private fb: FormBuilder = inject(FormBuilder);
  formGroup!: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      username: new FormControl<string>(this.userLoginForm.password, [
        Validators.required,
        Validators.minLength(2),
      ]),
      password: new FormControl<String>(this.userLoginForm.password, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  get username() {
    return this.formGroup.get('username');
  }

  get password() {
    return this.formGroup.get('password');
  }

  onSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      return;
    }

    console.log(`Please check errors`);
  }
}

export interface UserLoginForm {
  username: string;
  password: string;
}
