import { Component } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs/Rx';
import { Request } from './connect.module/request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  counter = -1;

  public get(): Observable<any> {
    this.counter++;
    if (this.counter % 2  === 1) {
      return Observable
      .throw({ message: 'Sorry, the lane is cyndicated.'})
      .catch((err, caught) => {
        console.log(err.message || 'Sorry, our servers are in hot water.');
        return [];
      });
    }
    return Observable.of({
      fname: 'John',
      lname: 'Doe'
    });
  }

  public click() {

    const request = new Request();
    request.subscribe(r => {
      console.log(r);
    });
    // request.catch(message => {
    //   alert(message);
    // });
    request.send();

  }



}

