import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: HomePageComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'create/student', component: CreateStudentComponent },
  { path: 'create/department', component: HomePageComponent },
  { path: 'create/subject', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
