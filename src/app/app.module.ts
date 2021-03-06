import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //NgModel lives here
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlogpostPanelComponent } from './blogpost-panel-list/blogpost-panel/blogpost-panel.component';
import { BlogpostFullviewComponent } from './blogpost-fullview/blogpost-fullview.component';
import { TagbarComponent } from './tagbar/tagbar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BlogpostPanelListComponent } from './blogpost-panel-list/blogpost-panel-list.component';
import { NavbarLoggedInComponent } from './navbar-logged-in/navbar-logged-in.component';
// import { NavbarPublicComponent } from './navbar-public/navbar-public.component';
import { SignupComponent } from './signup/signup.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpinterceptorService } from './service/httpinterceptor.service';
import { AppRoutingModule } from './app-routing.module';

import { CreateblogpostComponent } from './createblogpost/createblogpost.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchPanelsComponent } from './search-list/search-panels/search-panels.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { ErrorhandlingService } from './service/errorhandling.service';


@NgModule({
  declarations: [
    AppComponent,
    BlogpostPanelComponent,
    BlogpostFullviewComponent,
    TagbarComponent,
    LoginComponent,
    LogoutComponent,
    BlogpostPanelListComponent,
    NavbarLoggedInComponent,
   // NavbarPublicComponent,
    SignupComponent,
    CreateblogpostComponent,
    DashboardComponent,
    SearchListComponent,
    SearchPanelsComponent,
    MyPostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    BlogpostPanelListComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorhandlingService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
