import { Injectable } from '@angular/core';
import { Person } from './person';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
private typeOfPersonArr: Person[] = [
  new Person("Andre Smith", 43),
  new Person("Selena Johnson", 22)
];
  
  constructor(){ }
  // getPerson(): void{
  //   this.typeOfPersonArr.filter((person) =>{
  //     return "Full Name: " + person.getFullName()
  //   }
  //   )
  // }

  // people(): Observable<string[]> {
  //   return this.personService.person()<string[]>()
  // }

  

}
