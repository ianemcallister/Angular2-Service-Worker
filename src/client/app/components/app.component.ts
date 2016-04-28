import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {SchedulesFilterComponent} from './schedulesFilter.component';
import {NameListService} from '../shared/name-list';
import {TimeService} from '../shared/time';
import {HomeComponent} from '../+home/index';
import {AboutComponent} from '../+about/index';
import {NavigationComponent} from '../+navigation/index';
import {SchedulesComponent} from '../+schedules/index';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService, TimeService],
  templateUrl: 'app/components/app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent, SchedulesFilterComponent]
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomeComponent
  },
  {
    path: '/nav/:start/:end/:dirctn/:wkday/:time',
    name: 'Navigation',
    component: NavigationComponent
  },
  {
    path: '/sched/:short/:long/:dirctn/:wkday/:time',
    name: 'Schedules',
    component: SchedulesComponent
  },
  {
    path: '/about',
    name: 'About',
    component: AboutComponent
  }
])
export class AppComponent {}
