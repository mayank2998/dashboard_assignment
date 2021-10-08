import { Component, OnInit } from '@angular/core';
import { studentDetails} from '../model';
import { StudentDetailsService } from '../student-details.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:Array<studentDetails> = []
  constructor(private userService:StudentDetailsService) {
  
   console.log(this.userList)
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.userService.getAllUser().subscribe((data) => {
      this.userList = data
     })
  }

  deleteData(id:any){
    this.userService.deleteUserById(id).subscribe((data) => {
      this.loadData()
    })
  }

}
