import { Component, OnInit, Input } from '@angular/core';
import {Fish} from "../../models/Fish"
@Component({
  selector: 'app-fish-item-one',
  templateUrl: './fish-item-one.component.html',
  styleUrls: ['./fish-item-one.component.css']
})
export class FishItemOneComponent implements OnInit {
 @Input() data: Fish
  constructor() { }

  ngOnInit(): void {
  console.log(this.data)
  }

}
