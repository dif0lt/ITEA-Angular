import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'sort'
})

export class SortPipe implements PipeTransform {
  transform(arr: Array<any>, kay: string, order?: string): any {
    console.log('SortPipeInit')
    let res = arr;
    let mod = 1;
    if (order == 'rew') { mod = -1};

    function compare(a, b) {
      if (a[kay] < b[kay]) {
        return -1 * mod;
      }
      if (a[kay] > b[kay]) {
        return 1 * mod;
      }
      return 0;
    }

    return res.sort(compare);
  }
}