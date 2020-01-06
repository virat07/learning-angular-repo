import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private service: PostsService) {}
  ngOnInit() {
    this.service.getAll()
      .subscribe(
        ((posts: any[]) => this.posts = posts))
  };

  createPost(input: HTMLInputElement) {
    let postData = {
      title: input.value
    };
    input.value = '';
    this.service.create(postData)
      .subscribe(
        (newPost: any) => {
          postData['id'] = newPost.id;
          this.posts.splice(0, 0, postData);
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError)
          }
          else throw error;
        });
  };
  updatePost(post) {
    this.service.update(post)
      .subscribe(
        (updatedPost: any) => {
          console.log(updatedPost);
        });
  };
  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('This post has already been deleted');
          }
          else throw error;
        });
  };

};
