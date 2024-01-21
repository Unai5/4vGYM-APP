import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-casilla-vacia',
  standalone: true,
  imports: [],
  templateUrl: './casilla-vacia.component.html',
  styleUrl: './casilla-vacia.component.css'
})
export class CasillaVaciaComponent {
  @Input() cuadroId: number | undefined;
  @Output() abrirFormularioEvent = new EventEmitter<number>();
  public add(): void{
    this.abrirFormularioEvent.emit(this.cuadroId);
  }
}
    