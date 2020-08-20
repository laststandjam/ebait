import { Component, OnInit, Input } from '@angular/core';
import {Fish} from '../../models/Fish';

@Component({
  selector: 'app-fish-Item',
  templateUrl: './fish-Item.component.html',
  styleUrls: ['./fish-Item.component.css']
})
export class FishItemComponent implements OnInit {
  @Input() fish: Fish
  constructor() { }

  ngOnInit(): void {
  }

}
