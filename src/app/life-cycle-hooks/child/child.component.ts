import {
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent
  implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit
{
  @Input() value = '';

  constructor() {
    console.log('CHILD Constructor');
  }

  ngOnInit(): void {
    console.log('CHILD ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHILD ngOnChanges', changes);
  }

  ngDoCheck(): void {
    console.log('CHILD ngDoCheck');
  }

  ngAfterViewInit(): void {
    console.log('CHILD ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('CHILD ngOnDestroy');
  }
}
