import { Component } from '@angular/core';
import { CalculadoraHijoComponent } from '../calculadora-hijo/calculadora-hijo.component';

@Component({
  selector: 'app-calculadora-padre',
  standalone: true,
  imports: [CalculadoraHijoComponent],
  templateUrl: './calculadora-padre.component.html',
  styleUrl: './calculadora-padre.component.css'
})
export class CalculadoraPadreComponent {
  v1: number = 0;
  v2: number = 0;
  resultado: number = 0;

  actualizarV1(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.v1 = parseFloat(inputElement.value) || 0; // Default to 0 if NaN
  }

  actualizarV2(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.v2 = parseFloat(inputElement.value) || 0; // Default to 0 if NaN
  }

  actualizarResultado(resultado: number) {
    this.resultado = resultado;
  }
}
