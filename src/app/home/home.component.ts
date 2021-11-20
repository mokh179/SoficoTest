import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { APIserviceService } from '../Services/apiservice.service';
import { Person } from './../Vmodels/person';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiSer:APIserviceService) { }
  Persons:Person[]=[];
  ngOnInit(): void {
  this.apiSer.GetAll().subscribe(a=>{
    this.Persons=a
    console.log(this.Persons)
  },err=>console.log(err))
  }
  
}
