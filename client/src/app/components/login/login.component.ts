import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  registerUserData = {
   name: "",
    email: "",
    userName: "",
    password: ""
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.userService.register(this.registerUserData).subscribe(res=>console.log(res))
  }

  }

