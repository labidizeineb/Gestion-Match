import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFiltrePrice'
})
export class MyFiltrePricePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
