import { HttpService } from './../service/http.service';
import { POSTS } from './../interface/posts';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: POSTS[] = [];
  public results: POSTS[] = [...this.posts];
  public noResultFlag: boolean = false;
  constructor(private http: HttpService) { }

  ngOnInit() {
    console.log('ngoninit');
    this.http.showLoading();
    setTimeout(() => {
      this.http.getPosts().subscribe((posts) => {
        this.http.hide();
        console.log(posts);
        this.posts = posts;
        this.results = [...this.posts];
      })
    }, 2000);
  }

  showPosts(event: any) {
    const query = event.target.value.toLowerCase();
    const queryLower = query.toLowerCase();
    console.log(queryLower);
    this.results = this.posts.filter(item => item.title.indexOf(queryLower) > -1);
    console.log(this.results.length);
    this.results.length != 0 ? this.noResultFlag = false : this.noResultFlag = true;
  }
}
