import {Routes} from '@angular/router';
import {IndexComponent} from './normal/index/index.component';
import {ArticleDetailComponent} from './normal/article-detail/article-detail.component';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/index'},
  {path: 'index', component: IndexComponent},
  {path: 'detail/:id', component: ArticleDetailComponent},
  {path: '*', pathMatch: 'full', redirectTo: '/login'},
];
