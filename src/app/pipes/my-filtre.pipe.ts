import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFiltre'
})
export class MyFiltrePipe implements PipeTransform {
  // matches:any=allMatches;
  transform(matches: any, ch: string): any {
    if (ch === undefined) {
      return matches;
    }
    return matches.filter((obj) => {
      return (
        obj.teamOne.toLowerCase().includes(ch.toLowerCase()) ||
        obj.teamTwo.toLowerCase().includes(ch.toLowerCase())
      )
    })
  }

}
