import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../api.service';
// import {MouseEvent} from '@agm/core'






@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})


export class CardviewComponent implements OnInit {
// zoom: number = 8;
lat: number = 20.5937;
lng: number = 78.9629;
gridview:boolean=true;
listview:boolean=false;
mapview:boolean=false;
searchvalue:any;
getalldata:any;
customer1:boolean=true;
order1:boolean=false;
newcustomer:boolean=false;
cdetials:boolean=true;
corder:boolean=false;
Id:number | undefined;
a?:any;
title:string="New Customer"
addcustomer:boolean=true;
editcustomer:boolean=false;
totalLength!:any;
page:any=1;
 
    constructor(private api:ApiService)
   { 
   
   }

   formvalue=new FormGroup({
    fname: new FormControl('',[Validators.required]),
    lname: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void 
  {
   
    this.getdata();
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  // mapClicked($event: MouseEvent) {
  //   this.markers.push({
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng,
  //     draggable: true
  //   });
  // }
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]


// just an interface for type safety.



  maincustomer()
  {
    this.customer1=true;
    this.order1=false;
  }
  mainorder()
  {
    this.customer1=false;
    this.order1=true;
  }
grid()
{
  this.gridview=true;
  this.listview=false;
  this.mapview=false;
  this.newcustomer=false;
}
list()
{
  this.listview=true;
  this.gridview=false;
  this.mapview=false;
  this.newcustomer=false;
}
map()
{
  this.listview=false;
  this.gridview=false;
  this.mapview=true;
  this.newcustomer=false;
}
customerdetials()
{
  this.cdetials=true;
  this.corder=false;
}
customerorder()
{
  this.cdetials=false;
  this.corder=true;
}
newcustomerfun()
  {

  this.listview=false;
  this.gridview=false;
  this.mapview=false;
  this.newcustomer=true;
  }
  onsubmit()
  {
    console.log(this.formvalue.value);
  }

  cancel()
  {
  this.formvalue.reset();
  this.listview=false;
  this.gridview=true;
  this.mapview=false;
  this.newcustomer=false;
  this.addcustomer=true;
  this.editcustomer=false;
  this.title="New Customer";
  }
  postdata()
{
  this.api.postvalue(this.formvalue.value).subscribe(res =>{
    console.log(res);
    alert("value added")
    this.getdata();
    this.formvalue.reset();
  },
  _err =>{
    alert("value not added");
  }
  )
  
}

getdata()
{
  this.api.getvalue().subscribe(res =>{
    this.getalldata=res;
    this.totalLength=res.length;
  })
}
showeditdata(data:any,id:number)
{
  this.listview=false;
  this.gridview=false;
  this.mapview=false;
  this.newcustomer=true;
  this.addcustomer=false;
  this.editcustomer=true;
  this.title="Edit customer";
  this.Id=id;
  this.formvalue.controls['fname'].setValue(data.fname);
  this.formvalue.controls['lname'].setValue(data.lname);
  this.formvalue.controls['address'].setValue(data.address);
  this.formvalue.controls['city'].setValue(data.city);
  this.formvalue.controls['state'].setValue(data.state);
   
}

editdata(): void{
    this.api.updatevalue(this.formvalue.value,this.Id).subscribe(res =>{
      alert("value updated");
      this.getdata();
      this.formvalue.reset(); 
      this.listview=false;
      this.gridview=true;
      this.mapview=false;
      this.newcustomer=false;
      this.addcustomer=true;
      this.editcustomer=false;
      this.title="New Customer";

    })
  }
  
deletedata(a:any)
{
  this.api.deletevalue(a).subscribe( _res =>{
    alert("value deleted");
    this.getdata();
  })
}
}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}










