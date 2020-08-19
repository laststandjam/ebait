import { Component, OnInit } from '@angular/core';
import {Fish} from "../../models/Fish"

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {
fishs:Fish[];
  constructor() { }

  ngOnInit() {
    this.fishs = [{
      id:1,
      speices: "Goldfish",
      location: "LA",
      size: 3,
      price: 60,
      sex: true
    },{
      id:1,
      speices: "Goldfish",
      location: "SF",
      size: 3,
      price: 60,
      sex: true
    },{
      id:3,
      speices: "Beta",
      location: "LA",
      size: 1,
      price: 80,
      sex: true
    }
    ];  console.log(this.fishs)

  }

}
