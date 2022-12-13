import { Component, OnInit } from '@angular/core';
import { TesteModel } from './model/teste.model';

export enum Test{
  DIABLO = 'DIABLO IMORTAL',
  HEARTHSTONE = 'HEARTHSTONE',
  WAR_CRAFT = 'WAR_CRAFT',
  DIABLO_IV = 'DIABLO_IV',
  STAR_CRAFT = 'STAR_CRAFT'
}

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})


export class TesteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = Test.DIABLO_IV;

  teste(name: Test): TesteModel{
    switch (name){
        case Test.DIABLO_IV:
        return {
          title: 'Retorne à escuridão com o game Diablo IV',
          subTitle: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
          button: 'Jogue agora',
          imageGame: 'assets/teste/diabloIV.png',
          listGame: [
            
          ]
        };
        // case Test.HEARTHSTONE:
        // return {
        //   title: 'Retorne à escuridão com o game Diablo IV',
        //   subTitle: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
        //   button: 'Jogue agora',
        //   imageGame: 'assets/teste/heartstone.png',

        // };
        // case Test.WAR_CRAFT:
        // return {
        //   title: 'Retorne à escuridão com o game Diablo IV',
        //   subTitle: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
        //   button: 'Jogue agora',
        //   imageGame: 'assets/teste/warcraft.png'
        // };
        // case Test.DIABLO:
        // return {
        //   title: 'Retorne à escuridão com o game Diablo IV',
        //   subTitle: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
        //   button: 'Jogue agora',
        //   imageGame: 'assets/teste/diablo.png'
        // };
        // case Test.STAR_CRAFT:
        // return {
        //   title: 'Retorne à escuridão com o game Diablo IV',
        //   subTitle: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
        //   button: 'Jogue agora',
        //   imageGame: 'assets/teste/starcraft.png'
        // };
        default:
          return {
            title: 'Retorne à escuridão com o game Diablo IV',
            subTitle: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
            button: 'Jogue agora',
            imageGame: '',
            listGame: [


            ]
          }
      }


  }


  // switch (name: string): TesteModel{
  //   case Test.DIABLO:
  //   return {
  //     title: 'Retorne à escuridão com o game Diablo IV',
  //     subTitle: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
  //     button: 'Jogue agora',
  //     imageGame: ''
  //   };

  // }
}
