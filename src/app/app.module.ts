import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StudentDetailsComponent,
    UserListComponent,
    CreateStudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
