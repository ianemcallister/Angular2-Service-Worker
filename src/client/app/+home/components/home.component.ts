import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {TimeService} from '../../shared/time';
import {NameListService} from '../../shared/name-list';
import { NavRequest } from './navRequest'

@Component({
  selector: 'sd-home',
  templateUrl: 'app/+home/components/home.component.html',
  styleUrls: ['app/+home/components/home.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class HomeComponent implements OnInit {
  newName: string;
  nav: NavRequest;
  tempDate: string;
  tempTime: string;
  constructor(
    private _router: Router,
    public nameListService: NameListService,
    public _timeService: TimeService) {

  }
  
  /* Runs specific tasks on page load
   * @param N/A
   * @returns N/A
   */
  ngOnInit() {
    //TODO: UPDATE THIS LATER    
    this.nav = new NavRequest;
    this.nav.dirctn = 'dprt';

    //set a default value for the date
    this.tempTime = this._timeService.getMinTime();

    //set a default value for the time
    this.tempDate = this._timeService.getMinDate();
  }

  /* TODO: UPDATE THIS EXPLAINATION
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  setDirection(direction: string) {
    this.nav.dirctn = direction;
  }

  /* TODO: UPDATE THIS EXPLAINATION
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  setDate(date: string) {
    this.nav.wkday = this._timeService.getWkDay(date);
  }

  /* TODO: UPDATE THIS EXPLAINATION
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
  setTime(time: string) {
    this.nav.time = this._timeService.getUrlSafeTime(time);
  }

  /* Passes the navigation paramaters to the route calculate and changes the page
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
   submitBookends(bookends: NavRequest) {
    console.log('got this..');
    console.log(bookends);
    let link = ['Navigation', 
      { start: bookends.start, 
        end: bookends.end,
        dirctn: bookends.dirctn, 
        wkday: bookends.wkday, 
        time: bookends.time }];

    this._router.navigate(link);
   }

}
