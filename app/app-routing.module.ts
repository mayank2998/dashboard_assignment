import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QueryAttendanceComponent } from './query-attendance/query-attendance.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path : "dashboard",
    component : DashboardComponent,
    children : [
      {
        path : "user-list",
        component : UserListComponent
      },
      {
        path : "query-attendance/:name",
        component : QueryAttendanceComponent
      }
    ]
  },
  {
    path : "user-list",
    component : UserListComponent
  },
  {
    path : "user-create",
    component : UserCreateComponent
  },
  {
    path : "user-edit/:id", // user-edit/aabbb
    component : UserEditComponent
  },
  {
    path : "attendance/:id", // user-edit/aabbb
    component : AttendanceComponent
  },
  {
    path : "",
    component : DashboardComponent
  },
  {
    path : "attendance-report/:id", // user-edit/aabbb
    component : AttendanceReportComponent
  },
  {
    path : "query-attendance/:name",
    component : QueryAttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// Create a Student CRUD
// Mark Attendence for Student in Particular date
// List all the dates which students have attended the class