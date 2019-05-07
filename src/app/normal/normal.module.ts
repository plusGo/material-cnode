import {NgModule} from '@angular/core';
import {IndexComponent} from './index/index.component';
import {ShareModule} from '../share/share.module';
import {ArticleListInnerComponent} from './article-list-inner/article-list-inner.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

@NgModule({
  declarations: [IndexComponent, ArticleListInnerComponent, ArticleDetailComponent],
  imports: [
    ShareModule
  ]
})
export class NormalModule {
}
