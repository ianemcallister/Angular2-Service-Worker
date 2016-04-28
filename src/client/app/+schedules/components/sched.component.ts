import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import { RouteParams } from 'angular2/router';

import {NameListService} from '../../shared/name-list';

@Component({
  selector: 'sd-sched',
  templateUrl: 'app/+schedules/components/sched.component.html',
  styleUrls: ['app/+schedules/components/sched.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class SchedulesComponent implements OnInit {
  shortName: number;
  longName: string;

  constructor(
  	private _routeParams:RouteParams,
  	public nameListService: NameListService) {

  	//retrieve the shortName
  	this.shortName = +this._routeParams.get('short');

  }
  
  ngOnInit() {
  	
  	//update the view with the longName
  	this.longName = this.nameListService.getATrain(this.shortName);

  }
}
