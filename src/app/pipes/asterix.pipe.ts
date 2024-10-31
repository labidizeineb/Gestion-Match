import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {
  chVoy:string="aeiouy";
  transform(ch:string) :string {
    // let aster:string="*"
    let nvCh:string=""
    for (let i = 0; i < ch.length; i++) {
      let x:string=ch[i];
     for (let j = 0; j < this.chVoy.length; j++) {
      if (ch[i].toLowerCase()==this.chVoy[j]) {
        x="*"
        break;
      }
      }
      nvCh=nvCh+x;
     }
      
    
    return nvCh ;
  }

}
