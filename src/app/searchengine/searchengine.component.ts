import { Component, OnInit } from '@angular/core';
import {DepartmentModel} from '../department/department.model';
import {DepartmentService} from '../department/department.service';
@Component({
  selector: 'app-searchengine',
  templateUrl: './searchengine.component.html',
  styleUrls: ['./searchengine.component.css'],
  providers: [DepartmentService]
})
export class SearchengineComponent implements OnInit {

  public selected: string;
  public departs: DepartmentModel [] = [];
  public states: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',
    'California', 'Colorado',
    'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico',
    'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon',
    'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'];
  private projectsUrl = '/projects';  // URL to web api
  private availdivUrl = '/availabledevisionbyq';
  private availdepartmentsUrl = '/departments';
  private availadUrl = '/availableadbyq';
  private availraUrl = '/availablerabyq';
  private availpiUrl = '/availablepibyq';
  private baseurl = 'http://localhost:8080';

  constructor( private deptService: DepartmentService) { }

  ngOnInit() {
    // this.deptService.getdata(this.availpadUrl);
    this.deptService.getdata(this.baseurl + this.availdepartmentsUrl).then(departs => this.departs = departs);
    // for ( const dept  in this.departs) {
    //   console.log(' ManageTasksetsComponent '  + this.departs[0].name);
    // }
  }
}
