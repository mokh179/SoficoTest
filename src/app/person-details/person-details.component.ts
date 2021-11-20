import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIserviceService } from '../Services/apiservice.service';
import { Person } from './../Vmodels/person';
@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  constructor(private apiSer:APIserviceService,private ac:ActivatedRoute,private route:Router) { }
  person:Person=new Person
  edit:boolean=false;
  Contries=['Egy','USA','Germany','Sudan']
   URl:any;
  ngOnInit(): void {
    this.ac.params.subscribe(i=>{
      this.apiSer.GetPerson(i.id).subscribe(a=>{
        this.person=a;
        console.log(this.person)
      })
    })
  }

  fileChange(event:any){
    if(event.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload=(event:any)=>{
        this.person.avatar=event.target.result
      }
    }
    }

  updateInfo(){
this.edit=!this.edit;
  }

  chkAge(obj:any){
    debugger;
   let DOB=new Date(obj);
   let today=new Date();
   let Diff=DOB.getFullYear()-today.getFullYear()
  if(Diff<7)
  {
    alert("Please you must over 7 years old")
    this.person.dob="2014-01-01";
  }
   
  }

Edit(){
  console.log(this.person)
  this.person.avatar=this.URl
  this.apiSer.EditPerson(this.person).subscribe(a=>{
    this.route.navigateByUrl('/details/'+this.person.id)
    this.edit=!this.edit
})
}
}
