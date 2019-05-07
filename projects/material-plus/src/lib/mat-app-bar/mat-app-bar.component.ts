import {Component, Input, OnInit} from '@angular/core';
import {AppBarInterface} from '../component-interface/app-bar.interface';

@Component({
  selector: 'mat-app-bar',
  templateUrl: './mat-app-bar.component.html',
  styleUrls: ['./mat-app-bar.component.scss']
})
export class MatAppBarComponent implements OnInit, AppBarInterface {
  @Input()
  cssClass: string;
  @Input()
  cssStyle: any;

  @Input()
  backgroundColor: string;
  @Input()
  color: string;
  hasBorder: boolean;
  height: string;

  constructor() {
  }

  ngOnInit() {
  }

}
