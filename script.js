var User = /** @class */ (function () {
    function User() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    User.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    User.prototype.chiamata = function (minutiDurata) {
        this.carica -= minutiDurata * 0.2;
        this.numeroChiamate++;
    };
    User.prototype.numero404 = function () {
        return this.carica;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var firstUser = new User();
firstUser.ricarica(40);
firstUser.chiamata(5);
firstUser.chiamata(10);
firstUser.chiamata(15);
console.log("FirstUser Saldo:", firstUser.numero404().toFixed(2));
console.log("FirstUser Numero Chiamate:", firstUser.getNumeroChiamate());
firstUser.azzeraChiamate();
console.log("FirstUser Numero Chiamate after reset:", firstUser.getNumeroChiamate());
var secondUser = new User();
secondUser.ricarica(20);
secondUser.chiamata(10);
secondUser.chiamata(6);
secondUser.chiamata(15);
secondUser.chiamata(8);
console.log("SecondUser Saldo:", secondUser.numero404().toFixed(2));
console.log("SecondUser Numero Chiamate:", secondUser.getNumeroChiamate());
secondUser.azzeraChiamate();
console.log("SecondUser Numero Chiamate after reset:", secondUser.getNumeroChiamate());
var thirdUser = new User();
thirdUser.ricarica(30);
thirdUser.chiamata(15);
thirdUser.chiamata(25);
console.log("ThirdUser Saldo:", thirdUser.numero404().toFixed(2));
console.log("ThirdUser Numero Chiamate:", thirdUser.getNumeroChiamate());
thirdUser.azzeraChiamate();
console.log("ThirdUser Numero Chiamate after reset:", thirdUser.getNumeroChiamate());
