import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SIdebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { UserListComponent } from './user-list/user-list.component';

import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";



import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { QueryAttendanceComponent } from './query-attendance/query-attendance.component'
@NgModule({
  declarations: [
    AppComponent,
    SIdebarComponent,
    TopbarComponent,
    DashboardComponent,
    CardComponent,
    UserListComponent,
  
    UserCreateComponent,
    UserEditComponent,
  
    
    AttendanceComponent,
    AttendanceReportComponent,
    QueryAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
