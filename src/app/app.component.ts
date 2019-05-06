import {Component} from '@angular/core';
import {HttpPlusConfig} from 'ng-http-plus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-cnode';


  constructor() {
    HttpPlusConfig.builder()
      .baseUrl('https://cnodejs.org/api/v1 ')
      .addInterceptor({});
  }
}
