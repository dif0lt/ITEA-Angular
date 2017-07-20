import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(arr: Array<any>, start?: any, end?: any): any {
    let res = arr;
    if (start !== undefined) {
      if (end !== undefined) {
        res = arr.slice(start - 1, end);
      } else {
        res = arr.slice(start - 1, res.length);
      }
    }
    return res.join(', ');
  }
}
