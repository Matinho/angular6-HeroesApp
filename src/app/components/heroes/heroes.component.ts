import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  loading: boolean = true;

  constructor( private _heroesService: HeroesService) {

    this._heroesService.getHeroes()
          .subscribe( data => {
            // console.log(data);

            // for (const key$ in data) {
            //   if (data.hasOwnProperty(key$)) {
            //     const element = data[key$];
            //     console.log(element);
            //     this.heroes.push( element );
            //   }
            // } Usando esta forma no mantengo la Key y pierdo referencia a firebase

            this.heroes = data;
            this.loading = false;

          });
  }

  ngOnInit() {
  }

  borrarHeroe( key$: string ) {
    this._heroesService.borrarHeroe( key$ )
          .subscribe( respuesta => {
            if ( respuesta ) {
              console.error( respuesta );
            } else {
              // si borro el dato de firebase tengo que borrarlo de mi lista
              delete this.heroes[key$];
            }
          } );
  }

}
