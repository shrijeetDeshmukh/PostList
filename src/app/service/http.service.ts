import { POSTS } from './../interface/posts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url: string = "https://jsonplaceholder.typicode.com/posts";
  public loading: any;
  constructor(private http: HttpClient, private loadingCtrl: LoadingController) { }

  getPosts(): Observable<POSTS[]> {
    return this.http.get<POSTS[]>(this.url);
  }

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Loading posts...',
    });

    this.loading.present();
  }
  async hide() {

    this.loadingCtrl.dismiss();
  }
}
