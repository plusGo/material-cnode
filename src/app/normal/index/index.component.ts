import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  tabs = [
    {label: '全部', code: ''},
    {label: '精华', code: 'good'},
    {label: '分享', code: 'share'},
    {label: '问答', code: 'ask'},
    {label: '招聘', code: 'job'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
