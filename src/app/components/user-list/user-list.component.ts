import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/assets/Student';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()
  student!: Student;
  style: String = '';
  constructor() { }

  ngOnInit(): void {
    if(this.student != null){
      this.style = this.student!.percentage! <= 25 ? "danger" : this.student!.percentage! <= 50 ? "warning" : this.student!.percentage! <= 75 ? "info" : "success";
    }
  }

}
