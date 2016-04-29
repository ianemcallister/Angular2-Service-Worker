import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import { RouteParams } from 'angular2/router';

import {SchedulesFilterComponent} from '../../components/schedulesFilter.component';
import {NameListService} from '../../shared/name-list';
import { TrainLine } from '../../shared/TrainLine'

@Component({
  selector: 'sd-sched',
  templateUrl: 'app/+schedules/components/sched.component.html',
  styleUrls: ['app/+schedules/components/sched.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, SchedulesFilterComponent]
})
export class SchedulesComponent implements OnInit {
  train: TrainLine;

  constructor(
  	private _routeParams:RouteParams,
  	public nameListService: NameListService) {
  	//define local
  	this.train = new TrainLine;
  	
  	//retrieve the shortName	TODO: PULL THIS OUT INTO SOMETHING CLEANER LATER
  	this.train.short = +this._routeParams.get('short');
  	this.train.dirctn = +this._routeParams.get('dirctn');
  	this.train.wkday = +this._routeParams.get('wkday');
  	this.train.time = +this._routeParams.get('time');

  }
  
  ngOnInit() {
  	
  	//update the view with the longName
  	this.train.long = this.nameListService.getATrain(this.train.short);

  	console.log(this.train);

  	this.nameListService.getSystemMap()
  	.then(function(response) {
  		console.log(response);
  	});
  }
}
