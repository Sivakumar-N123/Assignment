import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { problemModal } from './problem/problem.modal';
@Injectable({
  providedIn: 'root'
})
export class WebapiService {
 
  constructor(private http:HttpClient) { }
  postvalue(data:any)
  {
    return this.http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>
    {
      return res;
    }))
  }
  getvalue()
  {
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>
    {
      return res;
    }))
  }
  updatevalue(data:any,id:number)
  {
    return this.http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>
    {
      return res;
    }))
  }
   deletevalue(id:number)
  {
    return this.http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>
    {
      return res;
    }))
  }
}
