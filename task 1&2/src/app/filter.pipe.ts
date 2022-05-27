import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter1: any) {
    if (!filter1)
      return value;
    if (value && value.length) {
      let result = value.filter((i: any) => {
        return i['field'] == filter1
      })
      return result;
    }

  }

}
