import {Component} from '@angular/core';
import {HttpPlusConfig} from 'ng-http-plus';
import {TopicClient} from './core/api/topic.client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-cnode';


  constructor(private topicClient: TopicClient) {


    HttpPlusConfig.builder()
      .baseUrl('https://cnodejs.org/api/v1')
      .addInterceptor({
        request: (req) => {
          return req;
        }
      });

    topicClient.getTopics(1, '', 20).subscribe(res => {
      debugger;
    });
  }
}
