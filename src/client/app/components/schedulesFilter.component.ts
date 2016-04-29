import {Component, Input, OnInit} from 'angular2/core';

import {NameListService} from '../shared/name-list';

@Component({
  selector: 'sd-schedulesfilter',
  templateUrl: 'app/components/schedulesFilter.component.html',
  styleUrls: ['app/components/schedulesFilter.component.css']
})
export class SchedulesFilterComponent implements OnInit {
	@Input() currentLine: number;
	@Input() currentTime: number;
	@Input() currentDirection: number;
	//linesByNum: any;
	//linesbyName: any;
	lineName: string;
	wkDays: any;
	visable: boolean;

	constructor(
		private _nameListService: NameListService) {

		this.visable = false;
		
		this.wkDays = [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday"
		];
	}

	ngOnInit() {

		//get the long name from the service
		//this.linesByNum = this._nameListService.getTrainsByKey();
		//this.linesByName = this._nameListService.getTrainsByName();

		//console.log(this.linesByNum);
		//console.log(this.linesByName);
		//save the current line name
		this.lineName = 'Red Line'; //this.linesByNum[this.currentLine];

	}


}
