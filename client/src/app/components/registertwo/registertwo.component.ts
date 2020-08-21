import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-registertwo',
  templateUrl: './registertwo.component.html',
  styleUrls: ['./registertwo.component.css']
})

export class RegistertwoComponent implements OnInit {
  
  registerUserData = {
   name: "",
    email: "",
    username: "",
    password: ""
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.userService.register(this.registerUserData).subscribe(res=>console.log(res))
  }

  }

