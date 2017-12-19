import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export class Request {

  private id;
  private headers: Headers;
  private errorHandler: (string) => any;
  private subscriber: any;


  constructor() {
    // Setting up default error handler.
    this.errorHandler = message => {
      console.log('Error Message: ', message || 'An unknown error occured.');
    };
  }

  public subscribe(subscriber: any): Request {
    this.subscriber = subscriber;
    return this;
  }

  public catch(onError: any): Request {
    this.errorHandler = onError;
    return this;
  }

  public send(): void {
    const request = this.createRequest()
    .catch((error, caught) => {
      console.log('Caught error: ', error);
      const message = error.message;
      this.errorHandler(message);
      return [];
    })
    .subscribe(this.subscriber);
  }

  private createRequest(): Observable<any> {
   // return Observable.throw({response : 'Throwing an error.'});
    return Observable.of([1, 2, 3]);
  }

}

