import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import 'rxjs/add/operator/map';
import {User} from './user'
@Injectable()
export class GithubService {

  constructor(private _http:Http){
    console.log('Github Service Ready...');
    this.username ='MrazTevin';
  }
}
