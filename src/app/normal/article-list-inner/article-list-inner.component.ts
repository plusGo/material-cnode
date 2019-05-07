import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from '../../core/business/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-list-inner',
  templateUrl: './article-list-inner.component.html',
  styleUrls: ['./article-list-inner.component.scss']
})
export class ArticleListInnerComponent implements OnInit {
  @Input()
  tab = '';

  @Input()
  page = 1;

  @Input()
  pageSize = 20;

  rows: any[] = [];
  state = {
    refreshState: {
      currentState: 'deactivate',
      drag: true
    },
    direction: 'down',
    endReachedRefresh: false,
    height: 500,
    data: [],
    directionName: 'both up and down'
  };

  constructor(private articleService: ArticleService,
              private router: Router) {

  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.articleService.getTopics(this.page, this.pageSize, this.tab).subscribe(res => {
      this.rows = res.data;
    });
  }

  goToDetail(article) {
    this.router.navigate(['/detail', article.id]);
  }
}
