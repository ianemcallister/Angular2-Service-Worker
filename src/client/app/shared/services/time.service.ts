import { Injectable } from 'angular2/core';

@Injectable()
export class TimeService {
   
   /* TODO: UPDATE THIS EXPLAINATION
   * @param newname  any text as input.
   * @returns return false to prevent default form submit behavior to refresh the page.
   */
	getCurrentDateTime() {
		return new Date();
	}

	getCurrentTime() {
		var currentDateTime = this.getCurrentDateTime();
		var currentDateTimeString = currentDateTime.toISOString();
		var timeOnly = currentDateTimeString.split("T");
		var noMillis = timeOnly[1].split(".");
		var hhMMOnly = noMillis[0].split(":");
		return hhMMOnly[0] + ":" + hhMMOnly[1];
	}

	//need a mimium date for date option
	getMinDate() {
		var fullDateTime = this.getCurrentDateTime().toISOString();
		var splitDateTime = fullDateTime.split('T');
		return splitDateTime[0];
	}

	//need a mimium time for time option
	getMinTime() {
		var fullTime = this.getCurrentDateTime().toTimeString();
		var time = fullTime.split(' ');
		return time[0];
	}

	getWkDay(date: string) {
		var currentTime = this.getCurrentTime();
		var fullDateTime = date + "T" + currentTime;
		//console.log(fullDateTime);
		//var receivedDate = Date.parse(fullDateTime);
		var receivedDate = new Date(fullDateTime);
		//console.log(receivedDate);
		//console.log(receivedDate.getDay());
		return receivedDate.getDay();
	}

	getUrlSafeTime(time: string) {
		var hhMMss = time.split(":");
		
		var hours = parseInt(hhMMss[0]) * 60 * 60;
		var minutes = parseInt(hhMMss[1]) * 60;
		var seconds = parseInt(hhMMss[2]);

		return hours + minutes + seconds;
	}

}