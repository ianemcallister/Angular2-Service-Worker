import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {NameListService} from '../../shared/name-list';

@Component({
  selector: 'sd-sched',
  templateUrl: 'app/+schedules/components/sched.component.html',
  styleUrls: ['app/+schedules/components/sched.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class SchedulesComponent {
  newName: string;
  
  constructor(public nameListService: NameListService) {}
  
}
