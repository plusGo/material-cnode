import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {SlideLeftRight} from '../animation/slide.animation';

@Component({
  selector: 'mat-app',
  templateUrl: './mat-app.component.html',
  styleUrls: ['./mat-app.component.scss'],
  animations: [SlideLeftRight]
})
export class MatAppComponent implements OnInit, OnDestroy {
  @HostBinding('@slideLeftRight') private state = 'normal';

  constructor() {

  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
  }

}
