import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SummaryPipe } from './summary.pipe';
import { Exercise1Component } from './exercise1/exercise1.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from './title-case.pipe';
import { LikeTwitterComponent } from './like-twitter/like-twitter.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { UdemySignupFormComponent } from './udemy-signup-form/udemy-signup-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CommonModule } from '@angular/common';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './services/posts.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './github-followers.service';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    Exercise1Component,
    TitleCaseComponent,
    TitleCasePipe,
    LikeTwitterComponent,
    InputFormatDirective,
    ContactFormComponent,
    UdemySignupFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PasswordChangeComponent,
    PostsComponent,
    GithubProfileComponent,
    NavbarComponent,
    HomeComponent,
    GithubFollowersComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'follwers/:id/:username', component: GithubProfileComponent },
      { path: 'followers', component: GithubFollowersComponent },
      { path: 'posts', component: PostsComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [CoursesService, PostsService, GithubFollowersService, {
    provide: ErrorHandler, useClass: AppErrorHandler
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
