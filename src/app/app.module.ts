import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';
import { UserpostsComponent } from './userposts/userposts.component';
import { PostcommentsComponent } from './postcomments/postcomments.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { MatIconModule } from '@angular/material/icon';
import { ViewpopupComponent } from './viewpopup/viewpopup.component';
import { DeletepopupComponent } from './deletepopup/deletepopup.component';
import { UserdetailspopupComponent } from './userdetailspopup/userdetailspopup.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, UserlistingComponent, UpdatepopupComponent, UserpostsComponent, PostcommentsComponent, PostsComponent, CommentsComponent, AlbumsComponent, PhotosComponent, TodosComponent, ViewpopupComponent, DeletepopupComponent, UserdetailspopupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
