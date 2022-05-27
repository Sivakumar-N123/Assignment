import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms';
import { WebapiService } from '../webapi.service';
import { problemModal } from './problem.modal';
  
@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
  list=[];
formvalue!: FormGroup;
problemobj:problemModal=new problemModal();
showadd:boolean=true;
showupdate:boolean=false;

getalldata:any;
  constructor(private formbuilder: FormBuilder,private api:WebapiService) { 
    
  }


  ngOnInit(): void {
    this.formvalue=this.formbuilder.group({
      item :[''],
      Quantity: [''],
      price: ['']
    })
    this.getdata();

  }

  

postdata()
{
  console.log(this.formvalue.value);
  this.problemobj.id=this.formvalue.value.id;
  this.problemobj.item=this.formvalue.value.item;
  this.problemobj.Quantity=this.formvalue.value.Quantity;
  this.problemobj.price=this.formvalue.value.price;

  

  this.api.postvalue(this.problemobj).subscribe(res =>{
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
  })
}

deletedata(a:any)
{
  this.api.deletevalue(a.id).subscribe( _res =>{
    alert("value deleted");
    this.getdata();
  })
}

showeditdata(data:any,id:number)
{
  this.showadd=false
  this.showupdate=true
  this.problemobj.id= id
  this.formvalue.controls['item'].setValue(data.item);
  this.formvalue.controls['Quantity'].setValue(data.Quantity);
  this.formvalue.controls['price'].setValue(data.price);
   
}
   
editdata(): void{

  
  this.problemobj.item=this.formvalue.value.item;
  this.problemobj.Quantity=this.formvalue.value.Quantity;
  this.problemobj.price=this.formvalue.value.price;

  this.api.updatevalue(this.problemobj,this.problemobj.id).subscribe(res =>{
    alert("value updated");
    this.getdata();
    this.formvalue.reset();
    
  })
}


// problem 1

  n:number=0;
  num:number=0;
  result:any;
  table:any=[];

submit()
{
  this.table=[]
  for(let i=1;i<=this.n;i++)
  {
    this.result = this.num+"x"+i+"="+this.num*i;

     this.table.push(this.result)
  }
}
// problem 2
num1:number=0;
result1:any;
result2:any;
squareroot:any=[];
cuberoot:any=[];
root()
{
this.squareroot=[];
this.cuberoot=[];

for(let i=1;i<=this.num1;i++)
{
  this.result1=Math.sqrt(i);
  this.squareroot.push(this.result1.toFixed(3));
  this.result2=Math.cbrt(i);
  this.cuberoot.push(this.result2.toFixed(3));
}

}

// problem 3

num2:number=0;
even:any=[];
odd:any=[];
sort()
{
  this.even=[];
  this.odd=[];
for(let i=1;i<=this.num2;i++)
{
  if((i%2)==0)
  {
    this.even.push(i);
  }
  else
  {
    this.odd.push(i);
  }
}
}

// problem 4

num3:number=0;
n1=-1;
n2=1;
n3=0;
series1:any=[]

series()
{this.series1=[];
  for(let i=0;i<this.num3;i++)
  {
this.n3=this.n1+this.n2
this.series1.push(this.n3);
this.n1=this.n2;
this.n2=this.n3;
  }
}


// problem 5

displayStyle = "none";
openPopup() {
  this.displayStyle = "block";
  this.formvalue.reset();
}
closePopup() {
  this.displayStyle = "none";
}

}

