import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sara',
  templateUrl: './sara.component.html',
  styleUrls: ['./sara.component.css']
})
export class SaraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pausaFisica(): void
  {
    alert("Realizar actividades físicas varias");
  }

  pausaMental(): void
  {
    alert("Realizar actividad guiada de relajación");
  }

  juegoRapido(): void
  {
    alert("Realizar juego de tingo, tingo, tingo, tango, por ej.");
  }


}
