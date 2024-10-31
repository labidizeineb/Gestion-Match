import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch:string) {
    let chRev:string="";
    for (let i = 0; i < ch.length; i++) {
      chRev=ch[i]+chRev;
      
    }
    return chRev;
  }

}
