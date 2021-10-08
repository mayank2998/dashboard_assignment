import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentDetailsService } from '../student-details.service';

@Component({
  selector: 'app-query-attendance',
  templateUrl: './query-attendance.component.html',
  styleUrls: ['./query-attendance.component.css']
})
export class QueryAttendanceComponent implements OnInit {

  userForm:FormGroup;
  id : number = 0;
  name : string = "";
  constructor(private activeRoute: ActivatedRoute,private router:Router,private userService:StudentDetailsService) { 
    this.userForm = new FormGroup({
      'studentId': new FormControl('', [Validators.required,Validators.min(1)]),
    })
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.name = paramsData.name;
    })
  }

  submitdata(){
    if(this.userForm.valid){
      
      this.id=this.userForm.value.studentId;
      console.log(this.id);
      this.router.navigate(['/attendance-report',`${this.userForm.value.studentId}`]);
    }
  }

  generateAttendance(){
    if(this.userForm.valid){
      this.id=this.userForm.value.studentId;
      console.log(this.userForm.value.studentId);
      this.router.navigate(["/attendance",`${this.userForm.value.studentId}`]);
    }
    else{
      alert("This id does not exist");
    }
  }

}
