import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: '<router-outlet>{{title}}</router-outlet>'
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public constructor(private viewContainerRef: ViewContainerRef) {}
}
