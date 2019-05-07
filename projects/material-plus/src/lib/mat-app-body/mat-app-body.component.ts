import {AfterContentInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AppBodyInterface} from '../component-interface/app-body.interface';

@Component({
  selector: 'mat-app-body',
  templateUrl: './mat-app-body.component.html',
  styleUrls: ['./mat-app-body.component.scss']
})
export class MatAppBodyComponent implements OnInit, AfterContentInit, OnDestroy, AppBodyInterface {
  public _top;
  public _bottom;
  @ViewChild('scrollContent')
  scrollContent: ElementRef;

  constructor(private renderer2: Renderer2,
              private elementRef: ElementRef) {
  }

  ngOnInit() {
  }


  ngAfterContentInit(): void {
    this.initContentHeight();
  }

  private initContentHeight() {
    setTimeout(() => {
      const parent = this.elementRef.nativeElement.parentElement;
      for (const child of parent.childNodes) {
        if (child.tagName === 'MAT-APP-BAR') {
          this._top = child.clientHeight;
        }
        if (child.tagName === 'MAT-FOOTER') {
          this._bottom = child.clientHeight;
        }
      }
      if (this._top) {
        this.renderer2.setStyle(this.scrollContent.nativeElement, 'marginTop', `${this._top}px`);
      }
      if (this._bottom) {
        this.renderer2.setStyle(this.scrollContent.nativeElement, 'marginBottom', `${this._bottom}px`);
      }
    });
  }

  public get scrollElement() {
    return this.scrollContent.nativeElement;
  }

  ngOnDestroy(): void {
  }

}
