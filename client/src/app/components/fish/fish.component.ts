import { Component, OnInit } from '@angular/core';
import {Fish} from "../../models/Fish"
import {FishService} from "../../service/fish.service"

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {
fishs:Fish[];

constructor(private fishService:FishService) { }

ngOnInit() {
this.fetchFishs()
}
fetchFishs(){
  this.fishService
  .getFish()
  .subscribe((data: Fish[])=>{
    this.fishs = data;
    console.log("data..",this.fishs)
    
  })
}

}