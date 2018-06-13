import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interfaces';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL: string = 'https://heroesapp-cb061.firebaseio.com/heroes.json';
  heroeURL: string = 'https://heroesapp-cb061.firebaseio.com/heroes/';

  constructor( private http: HttpClient ) { }

  nuevoHeroe( heroe: Heroe ) {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-type': 'aplication/json'
      })
    };

    return this.http.post(this.heroesURL, heroe, httpOptions)
                    .pipe(map( data => data['name'] ) );
  }

  actualizarHeroe( heroe: Heroe, key$: string ) {
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-type': 'aplication/json'
      })
    };

    let url = `${ this.heroeURL }${ key$ }.json`;

    return this.http.put( url, heroe, httpOptions )
                    .pipe(map( data => data ) );
  }

  getHeroe ( key$: string ) {

    let url = `${ this.heroeURL }${ key$ }.json`;

    return this.http.get( url ).pipe(map( data => data ) );

  }

  getHeroes ( ) {

    return this.http.get( this.heroesURL ).pipe(map( data => data ) );

  }

  borrarHeroe( key$: string ) {
    let url = `${ this.heroeURL }${ key$ }.json`;

    return this.http.delete( url ).pipe(map( data => data ) );
  }

}
