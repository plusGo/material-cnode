import {Component, Input, OnInit} from '@angular/core';
import {Optional} from 'stream-plus';

@Component({
  selector: 'app-article-badge',
  templateUrl: './article-badge.component.html',
  styleUrls: ['./article-badge.component.scss']
})
export class ArticleBadgeComponent implements OnInit {
  _article: any;
  text: string;
  bgColor = '#999';

  @Input()
  set article(artcile: any) {
    this._article = artcile;
    if (!this.article) {
      return;
    }

    Optional.ofNullable(this.article)
      .ifPresent(article => {
        if (article.top) {
          this.text = '置顶';
          this.bgColor = '#80bd01';
          return;
        }
        // if (article.good) {
        //   this.text = '精华';
        //   this.bgColor = '#80bd01';
        //   return;
        // }

        if (article.tab === 'share') {
          this.text = '分享';
          return;
        }

        if (article.tab === 'good') {
          this.text = '精华';
          this.bgColor = '#80bd01';
          return;
        }

        if (article.tab === 'ask') {
          this.text = '问答';
        }

        if (article.tab === 'job') {
          this.text = '招聘';
        }
      });
  }

  get article(): any {
    return this._article;
  }
  constructor() {
  }

  ngOnInit() {

  }

}
