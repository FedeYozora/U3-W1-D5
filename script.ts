interface Smartphone {
  ricarica(unaRicarica: number): void;
  chiamata(minutiDurata: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}
class User implements Smartphone {
  carica: number;
  numeroChiamate: number;

  constructor() {
    this.carica = 0;
    this.numeroChiamate = 0;
  }

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  chiamata(minutiDurata: number): void {
    this.carica -= minutiDurata * 0.2;
    this.numeroChiamate++;
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const firstUser = new User();
firstUser.ricarica(40);
firstUser.chiamata(5);
firstUser.chiamata(10);
firstUser.chiamata(15);
console.log("FirstUser Saldo:", firstUser.numero404().toFixed(2));
console.log("FirstUser Numero Chiamate:", firstUser.getNumeroChiamate());
firstUser.azzeraChiamate();
console.log("FirstUser Numero Chiamate after reset:", firstUser.getNumeroChiamate());

const secondUser = new User();
secondUser.ricarica(20);
secondUser.chiamata(10);
secondUser.chiamata(6);
secondUser.chiamata(15);
secondUser.chiamata(8);
console.log("SecondUser Saldo:", secondUser.numero404().toFixed(2));
console.log("SecondUser Numero Chiamate:", secondUser.getNumeroChiamate());
secondUser.azzeraChiamate();
console.log("SecondUser Numero Chiamate after reset:", secondUser.getNumeroChiamate());

const thirdUser = new User();
thirdUser.ricarica(30);
thirdUser.chiamata(15);
thirdUser.chiamata(25);
console.log("ThirdUser Saldo:", thirdUser.numero404().toFixed(2));
console.log("ThirdUser Numero Chiamate:", thirdUser.getNumeroChiamate());
thirdUser.azzeraChiamate();
console.log("ThirdUser Numero Chiamate after reset:", thirdUser.getNumeroChiamate());
