import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { studentDetails } from '../model';
import { StudentDetailsService } from '../student-details.service';

@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.css']
})
export class AttendanceReportComponent implements OnInit {

  id : number = 0;
  dateList : any = []

  constructor(private userService:StudentDetailsService,private activeRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
    })
    this.loadData()
  }

  loadData(){
    this.activeRoute.params.subscribe((paramsData) => {
      this.id = paramsData.id;
      this.userService.getUserByID(paramsData.id).subscribe((data) => {
        console.log(data as studentDetails)
        for(var i=0;i<data.dates.length;i++){
          console.log(data.dates[i]);
          this.dateList.push(data.dates[i]);
          console.log(this.dateList[i]);
        }
      })
    })
  }

}
