import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {
  transform(arr: Array<any>, kay: string, reverse?: boolean): any {
    if (!arr || !Object.keys(arr[0]).includes(kay)) {return arr}
    let data = arr;
    let mod
    reverse ? mod = -1: mod = 1;
    return data.sort(function(a, b) {
      if (a[kay].toLowerCase() < b[kay].toLowerCase()) {
        return -1 * mod;
      } else if (a[kay].toLowerCase() > b[kay].toLowerCase()) {
        return 1 * mod;
      } else {
        return 0;
      } 
    });
  }
}