import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getAge'
})
export class GetAgePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let x=value as string
    let DOB=new Date(x)
    let Diff=Date.now()-DOB.getTime();
    let dateDiff=new Date(Diff);
    let year = dateDiff.getUTCFullYear();
    let age = Math.abs(year - 1970);
    return age
  }

}
