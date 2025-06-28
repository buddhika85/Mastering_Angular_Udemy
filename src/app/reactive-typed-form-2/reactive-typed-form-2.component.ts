import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-typed-form-2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-typed-form-2.component.html',
  styleUrl: './reactive-typed-form-2.component.scss',
})
export class ReactiveTypedForm2Component implements OnInit {
  loginDto: LoginDto = { username: '', password: '' };

  formBuilder: FormBuilder = inject(FormBuilder);
  formGroup!: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
  }>;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: new FormControl<string>(this.loginDto.username, {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(2)],
      }),
      password: new FormControl<string>(this.loginDto.password, {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(5)],
      }),
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

    console.log('Invalid form inputs');
  }
}

export interface LoginDto {
  username: string;
  password: string;
}
