import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../github-followers.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from "rxjs";


@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[]
  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }
  ngOnInit() {
    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).subscribe((combined: any) => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      this.service.getAll()
        .subscribe((followers: any[]) => this.followers = followers)

    })

  }

}
