import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any,filtervalue : any) {
    let results:any = []
    let temp
    if(!filtervalue)
        return value
    if(value && value.length){
        value.forEach((v:any)=>{
            temp = v['list'].toUpperCase();
            filtervalue = filtervalue.toUpperCase();
            if(temp.includes(filtervalue))
                results.push(v);
        })
        return results;
    }
}
  // transform(value:any,filtervalue:any) {
  //   if(!value) return []; 
  //   if(!filtervalue) return value;
  //   return value.filter((categary)=> 
  //   {
  //     return categary.toLowerCase().includes(filtervalue)
  //   })
  // }
}
