import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-page',
  templateUrl: './fifth-page.component.html',
  styleUrls: ['./fifth-page.component.css']
})
export class FifthPageComponent implements OnInit {

  public professions: string[] = [
    'Anticuario',
    'Detective de la policia',
    'Diletante',
    'Escritor',
    'Médico',
    'Periodista',
    'Profesor de universidad',
    'Abogado',
    'Artista',
    'Atleta profesional',
    'Clérigo',
    'Criminal',
    'Fanático',
    'Granjero / Guardabosques',
    'Ingeniero',
    'Intérprete',
    'Investigaor Privado',
    'Miembro de tribu',
    'Misionero',
    'Músico',
    'Oficial militar',
    'Orador',
    'Parapsicólogo',
    'Piloto',
    'Pirata informático/técnico',
    'Policía',
    'Soldado',
    'Trotamundos'
  ];

  constructor() { }

  ngOnInit() {
  }

}
