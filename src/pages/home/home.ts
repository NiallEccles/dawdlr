import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.services';
import { HttpModule } from '@angular/http';

import 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any;
  constructor(public navCtrl: NavController, private redditService: RedditService) {

  }

  ngOnInit(){
    this.getPosts('ExposurePorn', 5);
  }

  getPosts(category, limit){
    this.redditService.getPosts(category, limit).subscribe( response => {
      this.items = response.data.children;
      console.log(response);
    });
  }

}
