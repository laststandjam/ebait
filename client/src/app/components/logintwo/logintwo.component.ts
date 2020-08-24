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
  logIn(){ console.log('hit 1')
   this.userService.login(this.logInData)
  .subscribe(
   res=>console.log(res),
   err=>console.log(err)
  )
  }

}
