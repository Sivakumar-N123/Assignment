import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {
detials=[{fname:"siva",lname:"kumar",address:"sankarankovil",city:"Tenkasi",state:"Tamilnadu",order_total:"$123"}];
gridview:boolean=true;
listview:boolean=false;
  constructor()
   { 

   }

  ngOnInit(): void 
  {

  }

grid()
{
  this.gridview=true;
  this.listview=false;

}
list()
{
  this.listview=true;
  this.gridview=false;

}
}
