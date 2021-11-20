import { Component, OnInit } from '@angular/core';
import { Person } from './../Vmodels/person';
import { APIserviceService } from '../Services/apiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
 
  constructor(private apiSer:APIserviceService,private route:Router) { }
   obj:Person=new Person();
   Contries=['Egy','USA','Germany','Sudan']
   URl:any= "../../assets/Profile.png";
  ngOnInit(): void {
  }

fileChange(event:any){
if(event.target.files){
  var reader=new FileReader();
  reader.readAsDataURL(event.target.files[0])
  reader.onload=(event:any)=>{
    this.URl=event.target.result
  }
  
}
}
upload(){
  console.log(typeof(this.URl))
}
Save(){
  this.obj.avatar=this.URl;
  console.log(this.obj)
  this.apiSer.AddPerson(this.obj).subscribe(a=>{
    this.route.navigateByUrl("/home")}); 
 }

 chkAge(obj:any){
   debugger;

  let DOB=new Date(obj);
  let today=new Date();
  let Diff=DOB.getFullYear()-today.getFullYear()
  if(Diff<7)
  {
    alert("Please you must over 7 years old")
    this.obj.dob="2014-01-01";
  }
 }
}
