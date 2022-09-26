import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/assets/Student';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  students: Student[] = [];

  constructor(private service: StudentService) { }

  ngOnInit(): void {
    this.getAllStudents();

  }

  getAllStudents(){
    this.service.getAllStudents().subscribe( res => { this.students = res });
  }

}
