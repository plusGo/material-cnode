import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CnodeResult} from '../../model/cnode-result.model';
import {CnodeArticle} from '../../model/cnode-article.model';
import {HttpPlusClient} from 'ng-http-plus';

@Injectable({
  providedIn: 'root'
})
export class TopicClient {

  public getTopics(page = 1, tab = '', limit = 20, mdrender = 'true'): Observable<CnodeResult<CnodeArticle[]>> {
    return HttpPlusClient.builder()
      .url('/topics')
      .param('page', page + '')
      .param('tab', tab)
      .param('limit', limit + '')
      .param('mdrender', mdrender)
      .get<CnodeResult<CnodeArticle[]>>();
  }

  public getTopic(id: string, accesstoken?: string, mdrender = 'true'): Observable<CnodeResult<CnodeArticle>> {
    return HttpPlusClient.builder()
      .url(`/topics/${id}`)
      .param('accesstoken', accesstoken)
      .param('mdrender', mdrender)
      .get<CnodeResult<CnodeArticle>>();

  }
}
