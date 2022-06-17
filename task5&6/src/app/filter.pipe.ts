import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {
  transform(value: any,searchvalue : any) {
    let results:any = []
    let temp
    let temp1
    if(!searchvalue)
        return value
    if(value && value.length){
        value.forEach((v:any)=>{
            temp = v['fname'].toUpperCase();
            temp1 = v['lname'].toUpperCase();
            searchvalue = searchvalue.toUpperCase();
            if(temp.includes(searchvalue))
                results.push(v);
            if(temp1.includes(searchvalue))
                results.push(v);
        })
        return results;
         }
        }

}
