import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { studentDetails } from '../model';
import { StudentDetailsService } from '../student-details.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
  providers: [DatePipe]
})
export class AttendanceComponent implements OnInit {
  userForm:FormGroup;
  id : number = 0;
  myDate = new Date();
  userData = {} as studentDetails; 
  constructor(private activeRoute: ActivatedRoute,private router:Router,private userService:StudentDetailsService,private datePipe: DatePipe) { 
    this.userForm = new FormGroup({
      'attendance': new FormControl('', [Validators.required]),
    });
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd') as unknown as Date;
  }

  ngOnInit(): void {

    this.activeRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      console.log("my Date");
      console.log(this.myDate)
      this.userService.getUserByID(paramsData.id).subscribe((data) => {
        console.log(data as studentDetails)
        this.userData = data;
        if(data.dates.length == 0){
          this.userData.dates = [];
        }       
      },
      () => {
        this.router.navigate(["/dashboard"])
        alert("No such Id")
      })
    })
  }

  submitdata(){
    if(this.userForm.valid){
      var alignFillDate = new Date(this.myDate);
      var pickUpDate = new Date(this.userForm.value.attendance);
      if(alignFillDate >= pickUpDate){
        console.log("true")
        this.userData.dates.push(this.userForm.value as Date);
        this.userService.updateUserById(this.id,this.userData).subscribe((data) => {
          this.userData.dates.push(this.userForm.value);
          this.router.navigate(["/user-list"])
        })

      }
      else{
        console.log("false");
        alert("Date Can not be greater than today");
      }
     
    }
  }

}
