import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-multiuploader',
  templateUrl: './multiuploader.component.html',
  styleUrls: ['./multiuploader.component.css']
})
export class MultiuploaderComponent implements OnInit,KeyValue {
  isDisabled: boolean = false;
  selectedfile1: boolean = false;
  allowed: boolean = false;
  tempstorage: KeyValue[] =  [];
  num:number=0;
  file: any;
  value: number=0;
  
  progress!: number;
 

  constructor(private api: ApiService) {

  }
  


  formfile: any = new FormGroup({
    multifile: new FormControl('', [Validators.required])
  })
  get f() {
    return this.formfile.controls;
  }
  ngOnInit(): void {


  }

  onsubmit() 
  {
    console.log("hi");
  }
  remove(id:any)
  {
    if(id==undefined)
    {
      this.tempstorage=[];
      this.formfile.reset();
      
    }else
    {
      if (this.tempstorage.length==1)
      {
        
        this.tempstorage=[];
        this.formfile.reset();

      }
      else{
        this.tempstorage.splice(id,1);
      }

    }
     
  }
  
  getfile(event: any)
  {

    if (event.target.files.length <= 3 ) 
    {
      console.log(event.target.files);
        if (this.tempstorage.length != 0) 
        {
          for (var i = 0; i < event.target.files.length; i++)
          {
            for (var j = 0; j < this.tempstorage.length; j++)
            {
              
              
              if (event.target.files[i].name == this.tempstorage[j].file.name)
              {
                this.num=2;
              }
            }
          }

         console.log(this.num);

          if(this.num==0)
          { console.log("hi");
          
            for (var i = 0; i < event.target.files.length; i++)
            {
              console.log(event.target.files[i].type);
              if (event.target.files[i].type == "application/pdf" || event.target.files[i].type == "application/msword")
              {

                this.tempstorage.push({file:event.target.files[i],value:0});

              }
              else
              {
                alert(" Please Select pdf/word");
                this.formfile.reset();
                this.tempstorage = [];
              }
            
            }
          }
          else
          {
            alert("please select different file")
            this.num=0;
          }
        }
        else 
        {
            for ( var i = 0; i < event.target.files.length; i++)
            {
              console.log(event.target.files[i].type);
              if (event.target.files[i].type == "application/pdf" || event.target.files[i].type == "application/msword")
              {

                this.tempstorage.push({file:event.target.files[i],value:0});

              }
              else
              {
                alert(" Please Select pdf/word");
                this.formfile.reset();
                this.tempstorage = [];
              }
            
            }
        }
      this.selectedfile1 = true;
    }
    else
    {
      alert("Select only 3 files");
      this.tempstorage = [];
      this.formfile.reset();
    }
  console.log(this.tempstorage[0].file.name);
  
  }

  post(id:number)
  {
    if(id==undefined)
    {
      for (var i = 0; i < this.tempstorage.length; i++)
      {
        if(this.tempstorage[i].value==100)
        {
          continue;
        }
        else{
          this.postdata(i,this.tempstorage[i].file)
        }
        
      }
    }
    else{
      this.postdata(id,this.tempstorage[id].file)
    }

  }
  
  postdata(id:any,file:any) {
      console.log(file);
      this.api.postfile(file).subscribe((res:any) => {
       this.tempstorage[id].value=res;
      })

  }
}

interface KeyValue { file: any, value: number }