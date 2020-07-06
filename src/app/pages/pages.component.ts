import { Component, OnInit } from '@angular/core';
import { Observable, observable, Subscriber } from 'rxjs';
import { retry, map } from 'rxjs/operators'

declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {



  constructor() {


    this.regresaObservable()
    /*.pipe(
      retry(2)
    )*/
    .subscribe(
      // numero => //console.log('Subs', numero),
      // error => console.error('Error en el obs: ',error),
      // ()=> console.log('El observador termino!')
    );
  }

  ngOnInit(): void {
    init_plugins();
  }

  regresaObservable():Observable<any>{
    /*let obs = */ return  new Observable( (observer: Subscriber<any>) =>{
      let contador = 0;
      let intervalo = setInterval(()=>{
        contador += 1;

        var salida = {
          valor: contador
        };

        observer.next(salida);
        if (contador ===3){
          //clearInterval(intervalo);
          observer.complete();
        }

        /*if(contador === 2){
          // clearInterval(intervalo);
          // console.error("Error en el obs Auxilio");
          observer.error('Auxilio!')
        }*/
      }, 1000);
    }).pipe(
      map(res => res.valor)
      /*map(resp => {
        return resp.valor +1
      })*/
    );
    // return obs;
  }


}
