import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-typed-form-3',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-typed-form-3.component.html',
  styleUrl: './reactive-typed-form-3.component.scss',
})
export class ReactiveTypedForm3Component implements OnInit {
  private loginInfo: LoginDto = { username: '', password: '' };

  private formBuilder: FormBuilder = inject(FormBuilder);
  formGroup!: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
  }>;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: this.formBuilder.control(this.loginInfo.username, {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(2)],
      }),
      password: this.formBuilder.control(this.loginInfo.password, {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(5)],
      }),
    });
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      console.log('please check validation errors');
      return;
    }
    console.log(this.formGroup.value);
  }

  onReset(): void {
    this.formGroup.reset();
  }

  get username(): FormControl<string> {
    return this.formGroup.controls.username;
  }

  get password() {
    return this.formGroup.controls.password;
  }
}

export interface LoginDto {
  username: string;
  password: string;
}
