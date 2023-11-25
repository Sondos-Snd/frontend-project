import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voyelle'
})
export class VoyellePipe implements PipeTransform {
  transform(value: any): any {
    let ch = value.replace(/[aeiouyAEIOUY]/g ,"*")  
    return ch
  }

}
