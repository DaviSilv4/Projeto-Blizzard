import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';

import { JogosModel } from './model/jogos.model';
import { JogosService } from './service/jogos.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.scss']
})
export class JogosComponent implements OnInit {

  jogos!: JogosModel | any

  constructor(private jogosService: JogosService) { }

  ngOnInit() {
    this.listaDeJogos();
  }

  public listaDeJogos() {
    this.jogosService.getJogos().pipe(
      tap(res => {
        this.jogos = res;
      })
    ).subscribe();
  }

}
