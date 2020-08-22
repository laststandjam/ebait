import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-logintwo',
  templateUrl: './logintwo.component.html',
  styleUrls: ['./logintwo.component.css']
})
export class LogintwoComponent implements OnInit {
  logInData = {
    email:"",
    password:""
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  logIn(){
   this.userService.login(this.logInData.email, this.logInData.password).subscribe(res=>console.log(res))
  }

}
