import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    shortName: string = 'john';
    longName: string = 'john Smith';
    PI: number = Math.PI;
    cantidad: number = 0.234;
    salario: number = 1594.5;
    fecha: Date = new Date();
    video: string = 'wzjWIxXBs_s';
    activar: boolean = true;
    numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    heroe: Object = {
        name: 'Logan',
        key: 'Wolverien',
        age: 500,
        address: {
            street: '1407 Graymalkin Lane',
            district: 'Salem Center'
        }
    };

    promiseResponse: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data received!'), 3000);
    });
}
