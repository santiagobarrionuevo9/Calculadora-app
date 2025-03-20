import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculadora-hijo',
  standalone: true,
  imports: [],
  templateUrl: './calculadora-hijo.component.html',
  styleUrl: './calculadora-hijo.component.css'
})
export class CalculadoraHijoComponent {

  @Input() v1!: number;
  @Input() v2!: number;
  @Output() resultado = new EventEmitter<number>();

  realizarOperacion(operacion: string) {
    let res: number;
    switch (operacion) {
      case 'suma':
        res = this.v1 + this.v2;
        break;
      case 'resta':
        res = this.v1 - this.v2;
        break;
      case 'multiplicacion':
        res = this.v1 * this.v2;
        break;
      case 'division':
        res = this.v1 / this.v2;
        break;
      case 'potencia':
        res = Math.pow(this.v1, this.v2);
        break;
      case 'raiz':
        res = Math.sqrt(this.v1); // Suponiendo que v1 es el valor del que se quiere calcular la raíz
        break;
      default:
        res = 0;
    }
    this.resultado.emit(res);
  }
}
