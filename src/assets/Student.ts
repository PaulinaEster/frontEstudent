import { Department } from "./Department";
import { Subject } from "./Subject";

export interface Student{
  id?: String;
	name: String;
	email: String;
	department: Department;
	subjects: Subject[]; 
	percentage?: Number;
}