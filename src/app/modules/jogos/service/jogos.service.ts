import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { JogosModel } from '../model/jogos.model';

@Injectable({
  providedIn: 'root'
})
export class JogosService {

  private getJogosAPI!: JogosModel

  constructor(private http: HttpClient) { }

  public getJogos(): Observable<any> {
    return this.http.get('https://api.brchallenges.com/api/blizzard/games');
  }
}
