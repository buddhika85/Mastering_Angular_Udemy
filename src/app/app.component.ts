import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ParentComponent } from './life-cycle-hooks/parent/parent.component';
import { HighlightDirective } from './highlight.directive';
import { UnderlineDirective } from './underline.directive';
import { ReactiveTypedFormComponent } from './reactive-typed-form/reactive-typed-form.component';
import { ReactiveTypedForm2Component } from './reactive-typed-form-2/reactive-typed-form-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveTypedForm2Component], // ParentComponent --> for life cycle hooks demo
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Mastering Angular Udemy';
}
