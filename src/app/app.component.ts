import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ParentComponent } from './child-parent-demo/parent/parent.component';
import { HighlightDirective } from './highlight.directive';
import { UnderlineDirective } from './underline.directive';
import { ReactiveTypedFormComponent } from './reactive-typed-form/reactive-typed-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveTypedFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Mastering Angular Udemy';
}
