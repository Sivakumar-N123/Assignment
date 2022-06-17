import { HttpClient, HttpEvent,HttpEventType} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  progress:any;
  uploadProgress!:number;
  constructor(private http:HttpClient) { }
  postvalue(data:any)
  {
    return this.http.post<any>("http://localhost:3000/detials",data).pipe(map((res:any)=>
    {
      return res;
    }))
  }

  getvalue()
  {
    return this.http.get<any>("http://localhost:3000/detials").pipe(map((res:any)=>
    {
      return res;
    }))
  }
  updatevalue(data:any,id:any)
  {
    return this.http.put<any>("http://localhost:3000/detials/"+id,data).pipe(map((res:any)=>
    {
      return res;
    }))
  }
   deletevalue(id:any)
  {
    return this.http.delete<any>("http://localhost:3000/detials/"+id).pipe(map((res:any)=>
    {
      return res;
    }))
  }


  // for file
  postfile(data:any)
  {
    return this.http.post<any>("http://localhost:3000/files",data,{
      reportProgress: true,
      observe: 'events'
  }).pipe(map((event: any) => {
      if (event.type == HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round(100 * (event.loaded / event.total));
      }
      return this.uploadProgress
    },
    ),
    catchError((err: any) => {
      this.progress = null;
      alert(err.message);
      return throwError(err.message);
    }));
  }

}
