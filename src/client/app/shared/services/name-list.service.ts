import { SYSTEMMAP } from '../mock-systemMap';
import { Injectable } from 'angular2/core';

@Injectable()
export class NameListService {

  names = [
    {long:'Red Line', short:'90'},
    {long:'Blue Line', short:'100'},
    {long:'Yellow Line', short:'190'},
    {long:'Green Line', short:'200'},
    {long:'Orange Line', short:'290'}
  ];

  stations = [
    {id:"landmark-96",name:"Beaverton TC MAX Station",desc:"Northbound stop in Beaverton (Stop ID 9821)"},
    {id:"landmark-143",name:"Sunset TC MAX Station",desc:"Eastbound stop in Beaverton (Stop ID 9969)"},
    {id:"landmark-113",name:"Washington Park MAX Station",desc:"Eastbound stop in Portland (Stop ID 10120)"},
    {id:"landmark-112",name:"Goose Hollow/SW Jefferson St MAX Station",desc:"Eastbound stop in Portland (Stop ID 10118)"},
    {id:"landmark-94",name:"Kings Hill/SW Salmon St MAX Station",desc:"Northbound stop in Portland (Stop ID 9759)"},
    {id:"landmark-93",name:"Providence Park MAX Station",desc:"Eastbound stop in Portland (Stop ID 9758)"},
    {id:"8333",name:"Library/SW 9th Ave MAX Station",desc:"Eastbound stop in Portland (Stop ID 8333)"},
    {id:"8334",name:"Pioneer Square South MAX Station",desc:"Eastbound stop in Portland (Stop ID 8334)"},
    {id:"8335",name:"Mall/SW 4th Ave MAX Station",desc:"Eastbound stop in Portland (Stop ID 8335)"},
    {id:"8336",name:"Yamhill District MAX Station",desc:"Eastbound stop in Portland (Stop ID 8336)"},
    {id:"landmark-138",name:"Oak/SW 1st Ave MAX Station",desc:"Northbound stop in Portland (Stop ID 8337)"},
    {id:"landmark-118",name:"Skidmore Fountain MAX Station",desc:"Northbound stop in Portland (Stop ID 8338)"},
    {id:"landmark-110",name:"Old Town/Chinatown MAX Station",desc:"Northbound stop in Portland (Stop ID 8339)"},
    {id:"landmark-137",name:"Rose Quarter TC MAX Station",desc:"Eastbound stop in Portland (Stop ID 8340)"},
    {id:"landmark-119",name:"Convention Center MAX Station",desc:"Eastbound stop in Portland (Stop ID 8341)"},
    {id:"landmark-120",name:"NE 7th Ave MAX Station",desc:"Eastbound stop in Portland (Stop ID 8342)"},
    {id:"landmark-121",name:"Lloyd Center/NE 11th Ave MAX Station",desc:"Eastbound stop in Portland (Stop ID 8343)"},
    {id:"landmark-122",name:"Hollywood/NE 42nd Ave TC MAX Station",desc:"Eastbound stop in Portland (Stop ID 8344)"},
    {id:"landmark-136",name:"NE 60th Ave MAX Station",desc:"Eastbound stop in Portland (Stop ID 8345)"},
    {id:"landmark-123",name:"NE 82nd Ave MAX Station",desc:"Eastbound stop in Portland (Stop ID 8346)"},
    {id:"landmark-135",name:"Gateway/NE 99th Ave TC MAX Station",desc:"Southbound stop in Portland (Stop ID 8347)"},
    {id:"landmark-144",name:"Parkrose/Sumner TC MAX Station",desc:"Northbound stop in Portland (Stop ID 10572)"},
    {id:"landmark-111",name:"Cascades MAX Station",desc:"Westbound stop in Portland (Stop ID 10574)"},
    {id:"landmark-145",name:"Mt Hood Ave MAX Station",desc:"Northbound stop in Portland (Stop ID 10576)"},
    {id:"10579",name:"Portland Int'l Airport MAX Station",desc:"Bidirectional stop in Portland (Stop ID 10579)"}
  ];

  getSystemMap() {
    //TODO: Update this to fetch later
    return Promise.resolve(SYSTEMMAP);
  }

  getTrains(): {long: string, short: string}[] {
    return this.names;
  }

  getTrainsByKey(): any {
    var allTrains = this.getTrains();
    var exportableObject: any = {};

    allTrains.forEach(function(line) {
      var short = Number(line.short);
      exportableObject[short] = line.long;
    });

    return exportableObject;
  }

  getTrainsByName(): any {
    var allTrains = this.getTrains();
    var exportableObject: any = {};

    allTrains.forEach(function(line) {
      var long = line.long;
      console.log(long);
      exportableObject[line.long] = Number(line.short);
    });

    return exportableObject; 
  }

  getStations(): {name: string, id: string}[] {
    return this.stations;
  }

  getATrain(short: number) {
    console.log(short);
    //decalare local variable
    var longName = '';

    //loop through values
    this.names.forEach(function(line) { if (Number(line.short) == short) longName = line.long; });
    
    //return findings
    return longName;
  }
  
  /*getALineSchedule
  add(value: string): void {
    this.names.push(value);
  }*/
}
