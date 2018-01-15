import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import 'rxjs/add/operator/map';
import {User} from './user'
import {Repos} from './repos'
@Injectable()
export class GithubService {

  constructor(private _http: HttpClient){
    console.log('Github Service Ready...');
    this.username ='MrazTevin';
  }
  getUser(){
    return this._http.get("http://api.github.com/users/"+this.username)

  }
  getRepos(){
    return this._http.get("http://api.github.com/users/"+this.username+'/repos')
}
updateUser(username:string){
  this.username = username;
}
