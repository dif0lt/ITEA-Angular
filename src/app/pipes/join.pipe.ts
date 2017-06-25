import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'join'
})

export class JoinPipe implements PipeTransform {
  transform(arr: Array<any>, start?: any, end?: any): any {
    let res = arr;
    if (start !== undefined) {
      if (end !==undefined) {
        res = arr.slice(start-1, end);
      } else {
        res = arr.slice(start-1, res.length);
      }
    }
    return res.join(', ');
  }
  //   transform(arr: Array<any>): any {
  //   let res = arr;
  //   if(arguments[0] !== undefined) {
  //     if(arguments[1] !==undefined) {
  //       res = arr.slice(arguments[1]-1, arguments[2]);
  //     } else {
  //       res = arr.slice(arguments[1]-1, res.length);
  //     }
  //   }
  //   return res.join(',');
  // }
}