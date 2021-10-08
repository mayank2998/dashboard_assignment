import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { studentDetails } from './model';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  userData:Array<studentDetails> = [];
  constructor(private http:HttpClient) { }

  saveUser(user:studentDetails){
    // this.userData.push(user)
    return this.http.post(`https://615dc86012571a00172078b4.mockapi.io/studentDetails`,user)
  }

  getAllUser(){
    return this.http.get<Array<studentDetails>>(`https://615dc86012571a00172078b4.mockapi.io/studentDetails`)
  }

  getUserByID(id:number){
    return this.http.get<studentDetails>(`https://615dc86012571a00172078b4.mockapi.io/studentDetails/${id}`)
  }

  updateUserById(userId:number,userdata:studentDetails){
    return this.http.put(`https://615dc86012571a00172078b4.mockapi.io/studentDetails/${userId}`,userdata)
  }

  deleteUserById(id:number){
    return this.http.delete(`https://615dc86012571a00172078b4.mockapi.io/studentDetails/${id}`)
  }
}
