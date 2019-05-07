import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../core/business/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article: any;

  constructor(private route: ActivatedRoute,
              private articleService: ArticleService) {
    this.route.params.subscribe(params => {
      if (params && params.id) {
        this.articleService.getDetail(params.id).subscribe(res => {
          this.article = res.data;
        });
      }
    });
  }

  ngOnInit() {
  }

  back() {
    history.back();
  }

}
