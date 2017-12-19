import { Headers, Http } from '@angular/http';
import { ResponseType } from './response-type.enum';
import { Observable } from 'rxjs/Rx';

export class Response {

  public id;
  public type: ResponseType;

  constructor(private http: Http) {
    this.type = this.type || ResponseType.RequestDelivery;
  }



}
