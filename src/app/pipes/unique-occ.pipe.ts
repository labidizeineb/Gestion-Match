import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'uniqueOcc'
})
export class UniqueOccPipe implements PipeTransform {
  eliminerRedoublement(ch: string): string {
    let resultat = "";
    for (let i = 0; i < ch.length; i++) {
      let testDouble = false;
      for (let j = 0; j < resultat.length; j++) {
        if (ch[i] === resultat[j]) {
          testDouble = true;
          break;
        }
      }
      if (testDouble == false) {
        resultat += ch[i];
      }
    }
    return resultat;
  }
  nombreOcc(a: string, ch: string): any {
    let n: any = 0;
    for (let i = 0; i < ch.length; i++) {
      if (a == ch[i]) {
        n += 1;
      }

    }
    return (n);
  }
  transform(ch: string): any {
    let chSansRedoublement = this.eliminerRedoublement(ch);
    // console.log("new ch", chSansRedoublement)
    for (let i = 0; i < ch.length; i++) {
      let caractere = chSansRedoublement[i];
      let nb = this.nombreOcc(caractere, ch)

      console.log(caractere + ":" + nb);


    }
  }

}
