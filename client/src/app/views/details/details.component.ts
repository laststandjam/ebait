import { Component, OnInit } from '@angular/core';
import {IssueService} from '../../issue.service'


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private issueService:IssueService) { }

  ngOnInit(): void {
  }


}
