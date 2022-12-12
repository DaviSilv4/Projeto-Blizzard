import { Component, OnInit } from '@angular/core';
import { JogosService } from './service/jogos.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.scss']
})
export class JogosComponent implements OnInit {

  constructor(private jogosService: JogosService) { }

  ngOnInit() {
    this.jogosService.getJogos();
  }

}
