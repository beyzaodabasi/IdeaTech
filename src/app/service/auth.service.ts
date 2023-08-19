import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  
  private readonly API_URL = 'https://jsonplaceholder.typicode.com/';

  // Tüm postlar
  GetPosts() {
    return this.http.get(this.API_URL + 'posts');
  }

  // Tüm Commentler
  GetComments() {
    return this.http.get(this.API_URL + 'comments');
  }

  // Tüm userlar
  GetAll() {
    return this.http.get(this.API_URL + 'users');
  }

  // User'a ait postlar
  GetUserPosts(id: number) {
    return this.http.get(this.API_URL + 'posts?userId=' + id);
  }

  // Post'a ait commentler
  GetPostComments(id: number) {
    return this.http.get(this.API_URL + 'comments?postId=' + id);
  }

  // Post Update
  async UpdatePost(id: number, userId: any, title: any, body: any) {
    return this.http
      .put(this.API_URL + 'posts/' + id, {
        id: id,
        userId: userId,
        title: title,
        body: body,
      })
      .toPromise()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  // Post Delete
  DeletePost(id: number) {
    return this.http.delete(this.API_URL + 'posts/' + id);
  }

  // Comment Update
  async UpdateComment(
    id: number,
    postId: any,
    name: any,
    email: any,
    body: any
  ) {
    return this.http
      .put(this.API_URL + 'comments/' + id, {
        id: id,
        postId: postId,
        name: name,
        email: email,
        body: body,
      })
      .toPromise()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  // Comment Delete
  DeleteComment(id: number) {
    return this.http.delete(this.API_URL + 'comments/' + id);
  }

  // Tüm Todo'lar
  GetTodos() {
    return this.http.get(this.API_URL + 'todos');
  }
}
