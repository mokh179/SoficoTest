import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../Vmodels/person';
@Injectable({
  providedIn: 'root'
})
export class APIserviceService {

  constructor(private http:HttpClient) { }
  GetAll(){
    return this.http.get<Person[]>('https://tekdi-challenges.appspot.com/api/People')
  }
  GetPerson(id:number){
    return this.http.get<Person>('https://tekdi-challenges.appspot.com/api/People/'+id)
  }
  AddPerson(obj:Person){
    return this.http.post<Person>("https://tekdi-challenges.appspot.com/api/People",obj);
  }
  EditPerson(obj:Person){
    return this.http.patch("https://tekdi-challenges.appspot.com/api/People/"+obj.id,obj);
  }
}
