import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registertwo',
  templateUrl: './registertwo.component.html',
  styleUrls: ['./registertwo.component.css']
})
export class RegistertwoComponent implements OnInit {
  registerUserData = {name: String}
  constructor() { }

  ngOnInit(): void {
  }

}
