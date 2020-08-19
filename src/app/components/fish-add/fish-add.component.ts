import { Component, OnInit, Input } from '@angular/core';
import {Fish} from '../../models/Fish';

@Component({
  selector: 'app-fish-add',
  templateUrl: './fish-add.component.html',
  styleUrls: ['./fish-add.component.css']
})
export class FishAddComponent implements OnInit {
  @Input() fish: Fish
  constructor() { }

  ngOnInit(): void {
  }

}
