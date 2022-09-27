import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/assets/Student';
import { Subject } from 'src/assets/Subject';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student!: Student;
  max = 0;
  time = false;
  alert = { mensagem: '', type: ''};
  subject: Subject = {subjectName: '', marksObtained: 0};

  editDep = false;
  editInfos = false;
  editSubject = false;

  constructor(private service: StudentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get("id")); 
    this.service.getUserById(id).subscribe((stu: Student) => { this.student = stu;});
    
    this.max = this.student.subjects.length * 100;
  }

  onDeleteStudent(): void{
    this.service.deleteStudentById(this.student.id!).subscribe(stu => { this.time = true; });
    
    this.sleep(2000);
    this.router.navigate(['/students']);
  }

  onUpdateStudent(): void{

    this.service.upadateStudent(this.student).subscribe(up => console.log(up));
    console.log(this.student);
    this.sleep(2000);
    //this.router.navigate(['/students']);
  }

  addSubject(): void { 
    if(this.subject.subjectName.length == 0){
      this.alert.mensagem = "Campo NOME SUBJECT não pode ser vazio.";
      this.alert.type = "danger"
    }else{
      this.alert.mensagem = ""; 
      this.student.subjects.push({ subjectName: this.subject.subjectName, marksObtained: this.subject.marksObtained });
    }
  }

  removeSubject(i: Number): void {
    this.student.subjects = this.student.subjects.filter((sub, index) => index != i);
  }

  sleep(milliseconds: number){
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
}
