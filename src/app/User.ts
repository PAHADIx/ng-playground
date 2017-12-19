
export class User {

  constructor() {
    console.log('created');
  }

  fname: string;
  lname: string;

  public get fullname(): string {
    return this.fname + ' ' + this.lname;
  }

}
