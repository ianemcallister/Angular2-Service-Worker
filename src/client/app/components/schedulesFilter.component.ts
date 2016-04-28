import {Component, Input} from 'angular2/core';

@Component({
  selector: 'sd-schedulesfilter',
  templateUrl: 'app/components/schedulesFilter.component.html',
  styleUrls: ['app/components/schedulesFilter.component.css']
})
export class SchedulesFilterComponent {
	@Input() currentLine: number;
	@Input() currentTime: number;
	@Input() currentDirection: number;
}
