import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



export class AppComponent {

  private subscriber: Subscription;
  public url: string;
  public mostrar: boolean = true;


  constructor(private router: Router) {

    this.subscriber = router.events.pipe
      (filter(event => event instanceof NavigationEnd)).subscribe((event) => {
        //console.log('The URL changed to: ' + event['url']);
        this.url = event['url'];
        console.log(this.url);
        this.mostrar = true;
        if (this.url == "/medicamentos/lunes") {
          this.mostrar = false;
          console.log(this.mostrar);

        }
        if (this.url == "/add-medicamento") {
          this.mostrar = false;
        }


        // if (this.url == "/add-medicamento") {
        //   this.mostrar = false;
        // }


        // this.subscriber?.unsubscribe();
      });



  }


}





// //en el constructor llamo mi router
// constructor (private router: Router) {}

// //En el ngOnInit, me subscribo al router events, que es el que te mandara los eventos cada que se inicie la navegación, y filtramos que solo te mande cuando termina de navegar NavigationEnd

// ngOnInit () {
//     this.subscriber = router.events.pipe(
//       filter(event => event instanceof NavigationEnd)
//     ).subscribe((event) => {
//        console.log('The URL changed to: ' + event['url'])
//     });
//  }

//   //En el onDestroy, valido si mi subscriber sigue activo y me desuscribo, si no seguirá activo escuchando cuando navegues a otro componente donde no lo requieras.
//  ngOnDestroy () {
//     this.subscriber?.unsubscribe();
//  }



