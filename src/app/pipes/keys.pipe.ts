import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {

  transform( value: any ): any {

    let keys = [];

    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        keys.push(key); // hago un arreglo de las llaves
      }
    }

    return keys;

  }

}
