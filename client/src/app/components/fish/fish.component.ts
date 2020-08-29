import { Component, OnInit } from '@angular/core';
import {Fish} from "../../models/Fish"
import {FishService} from "../../service/fish.service"
import { FishItemOneComponent } from '../fish-item-one/fish-item-one.component';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {
fishes:Fish[];

constructor(private fishService:FishService) { }

ngOnInit() {
this.fetchFishs()
}
fetchFishs(){
  this.fishService
  .getFish()
  .subscribe((res)=>{
    this.fishes = res;
    console.log("data..",this.fishes)
    
  })
}

}