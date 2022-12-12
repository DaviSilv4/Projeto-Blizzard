import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JogosModel } from '../model/jogos.model';

@Injectable({
  providedIn: 'root'
})
export class JogosService {

  private getJogosAPI!: JogosModel

  constructor(private http: HttpClient) { }

  public getJogos(){
    this.http.get('https://api.brchallenges.com/api/blizzard/games').subscribe();
  }
}
