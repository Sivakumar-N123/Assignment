import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  filtervalue: any;
  filter1:any;
  categarys= [
    { field: "Technical", list: "Terminal Instructables" },
    { field: "Technical", list: "Installation guides" },
    { field: "Human Resources", list: "Career opportunities" },
    { field: "Financial", list: "Customer onboarding" },
    { field: "Marketing", list: "Outlet branding" },
    { field: "Financial", list: "Accounting procedures" },
    { field: "Human Resources", list: "Training" },
    { field: "Marketing", list: "Printing guidance" },
    { field: "Technical", list: "Technical support" }]

  constructor() { }

  ngOnInit(): void {
  }
  All()
  {
    this.filter1=""
  }
  Financial(){
    this.filter1="Financial"
  }
  Technical()
  {
    this.filter1="Technical"
  }
  Marketing()
  {
    this.filter1="Marketing"
  }
  Human()
  {
    this.filter1="Human Resources"
  }
}
