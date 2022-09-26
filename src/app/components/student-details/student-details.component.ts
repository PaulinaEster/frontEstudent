import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/assets/Student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student!: Student;

  constructor(private service: StudentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get("id")); 
    this.service.getUserById(id).subscribe((stu: Student) => { this.student = stu;});
  }

}
