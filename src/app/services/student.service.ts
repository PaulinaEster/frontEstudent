import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/assets/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl: String = "http://localhost:8080/api/student/";

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<Student[]> {
    let url = `${this.baseUrl}getAllStudents`;
    return this.http.get<Student[]>(url);
  } 

  getUserById(id: String): Observable<Student> {
    let url = `${this.baseUrl}getById/${id}`;
    return this.http.get<Student>(url);
  }

  postStudent(newStu: Student): Observable<Student>{
    let url = `${this.baseUrl}create`;
    return this.http.post<Student>(url, newStu);
  }

}
