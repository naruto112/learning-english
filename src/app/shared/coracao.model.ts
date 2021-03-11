export class Coracao {
  constructor(
    public cheio: boolean,
    public urlCoracaoCheio: string = '/assets/heart_red.svg',
    public urlCoracaoVazio: string = '/assets/heart.svg'
  ) {}

  public exibeCoracao(): string {
    if (this.cheio) {
      return this.urlCoracaoCheio;
    } else {
      return this.urlCoracaoVazio;
    }
  }
}
