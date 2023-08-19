import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { UserpostsComponent } from './userposts/userposts.component';
import { PostcommentsComponent } from './postcomments/postcomments.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserlistingComponent },
  { path: 'user/:id', component: UserpostsComponent },
  { path: 'comments/:id', component: PostcommentsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'todos', component: TodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
