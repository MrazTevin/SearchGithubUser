export class User {
  constructor(private username:string, private access_token:string = environment.access_token){}
}
