import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frase-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent implements OnInit, OnDestroy {
  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase';
  public resposta: string;

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.resposta = '';
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  public atualizaResposta(response: Event): void {
    this.resposta = (<HTMLInputElement>response.target).value;
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      this.rodada++;
      this.progresso = this.progresso + 100 / this.frases.length;
      this.rodadaFrase = this.frases[this.rodada];

      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria');
      }

      this.resposta = '';
    } else {
      this.tentativas--;
      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }
}
