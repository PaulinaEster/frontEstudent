import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Department } from 'src/assets/Department';
import { Student } from 'src/assets/Student';
import { Subject } from 'src/assets/Subject';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  alert = { mensagem: '', type: '' };

  student: Student = {
    name: "",
    email: "",
    description: "",
    department: {
      departmentName: "",
      location: ""
    },
    subjects: []
  };
  department!: Department;
  subject: Subject = { subjectName: '', marksObtained: 0 };

  constructor(private serviceStudent: StudentService) { }

  ngOnInit(): void { }

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

  verificarFormulario(): boolean {
    if (this.student.name.length == 0) {
      this.alert.mensagem = "Campo nome não pode ser vazio.";
      this.alert.type = "danger"
    } else if (this.student.email.length == 0) {
      this.alert.mensagem = "Campo EMAIL não pode ser vazio.";
      this.alert.type = "danger"
    } else if (this.student.department.departmentName.length == 0) {
      this.alert.mensagem = "Campo NOME DE DEPARTAMENTO não pode ser vazio.";
      this.alert.type = "danger"
    } else if (this.student.department.location.length == 0) {
      this.alert.mensagem = "Campo LOCALIZACAO DO DEPARTAMENTO não pode ser vazio.";
      this.alert.type = "danger"
    } else {
      this.alert.mensagem = "Estudante adiconado com sucesso!!";
      this.alert.type = "success";
      return true;
    }
    return false;
  }

  createStudent(): void {
    if (this.verificarFormulario()) {
      this.serviceStudent.postStudent(this.student).subscribe(stu => console.log(stu));
    }
  }
}
