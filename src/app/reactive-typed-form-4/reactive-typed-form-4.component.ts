import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginDto } from '../reactive-typed-form-2/reactive-typed-form-2.component';

@Component({
  selector: 'app-reactive-typed-form-4',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-typed-form-4.component.html',
  styleUrl: './reactive-typed-form-4.component.scss',
})
export class ReactiveTypedForm4Component implements OnInit {
  private loginDto: LoginDto = { username: '', password: '' };
  private formBuilder: FormBuilder = inject(FormBuilder);
  formGroup!: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
  }>;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: this.formBuilder.control(this.loginDto.username, {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(2)],
      }),
      password: this.formBuilder.control(this.loginDto.password, {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(8),
        ],
      }),
    });
  }

  get username(): FormControl<string> {
    return this.formGroup.controls.username;
  }

  get password(): FormControl<string> {
    return this.formGroup.controls.password;
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      return;
    }
    console.log('Invalid form inputs');
  }

  onReset(): void {
    this.formGroup.reset();
  }
}

export interface UserLoginDto {
  username: string;
  password: string;
}
