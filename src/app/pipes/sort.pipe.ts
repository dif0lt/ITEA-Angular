import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {
  transform(arr: Array<any>, kay: string, reverse?: boolean): any {
    if (!arr || !Object.keys(arr[0]).includes(kay)) {return arr}
    const data = arr;
    let mod
    reverse ? mod = -1 : mod = 1;
    return data.sort(function(a, b) {
      console.log(a)
      console.log(b)
      console.log(kay)
      console.log(a[kay])
      if (a[kay].toString().toLowerCase() < b[kay].toString().toLowerCase()) {
        return -1 * mod;
      } else if (a[kay].toString().toLowerCase() > b[kay].toString().toLowerCase()) {
        return 1 * mod;
      } else {
        return 0;
      }
    });
  }
}
