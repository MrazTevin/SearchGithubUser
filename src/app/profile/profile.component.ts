import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
  }

}
