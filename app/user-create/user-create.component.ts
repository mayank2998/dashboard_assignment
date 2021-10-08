import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentDetailsService } from '../student-details.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userForm:FormGroup
  constructor(private userService:StudentDetailsService,private router:Router) {
    this.userForm = new FormGroup({
      'Name': new FormControl('', Validators.required),
      'College': new FormControl('', [Validators.required]),
      'Phone': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'Branch': new FormControl('', Validators.required),
      // 'deliveryAddress' : new FormArray([
      //   new FormGroup({
      //     'addressTitle' : new FormControl(''),
      //     'country' : new FormControl('')
      //   }),
      //   new FormGroup({
      //     'addressTitle' : new FormControl(''),
      //     'country' : new FormControl('')
      //   })
      // ])
    })
  }

  ngOnInit(): void {

  }

  submitUser(){
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.userService.saveUser(this.userForm.value).subscribe(() => {
        this.router.navigate(['/user-list'])
      },() => {
        alert("Something Went Wrong")
      })
      
    }
  }

  

}
