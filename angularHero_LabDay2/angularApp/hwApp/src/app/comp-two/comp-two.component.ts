import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {
  // peeps: Person[];

  constructor(private personService:PersonService) { }
 names: string []= [];
  ngOnInit() {
    
    this.personService.getPerson()
    .subscribe((name: string[]) =>{
      this.names == name;
      console.log(this.personService.getPerson());
    });
  }

  get dataList(): void{
    return this.personService.getPerson()
  }

  


}
