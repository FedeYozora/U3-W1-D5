var callN1 = document.getElementById("call1");
var callN2 = document.getElementById("call2");
var callN3 = document.getElementById("call3");
var resultsN1 = document.getElementById("results1");
var resultsN2 = document.getElementById("results2");
var resultsN3 = document.getElementById("results3");
var resultsDiv = document.getElementById("callResults");
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
function logMessage(message) {
    resultsDiv.innerHTML += message + "<br>";
}
var firstUser = new User();
firstUser.ricarica(40);
callN1.addEventListener("click", function () {
    if (firstUser.carica > 0.2) {
        var randomNumber = Math.floor(Math.random() * 20) + 1;
        firstUser.chiamata(randomNumber);
        logMessage("Saldo Rimanente Mario: " + firstUser.numero404().toFixed(2));
    }
    else {
        alert("Mario non ha credito sufficiente");
    }
});
resultsN1.addEventListener("click", function () {
    logMessage("Chiamate effettuate da Mario: " + firstUser.getNumeroChiamate());
    firstUser.azzeraChiamate();
    console.log("Numero Chiamate da Mario after reset:", firstUser.getNumeroChiamate());
});
var secondUser = new User();
secondUser.ricarica(20);
callN2.addEventListener("click", function () {
    if (secondUser.carica > 0.2) {
        var randomNumber = Math.floor(Math.random() * 20) + 1;
        secondUser.chiamata(randomNumber);
        logMessage("Saldo Rimanente Luigi: " + secondUser.numero404().toFixed(2));
    }
    else {
        alert("Luigi non ha credito sufficiente");
    }
});
resultsN2.addEventListener("click", function () {
    logMessage("Chiamate effettuate da Luigi: " + secondUser.getNumeroChiamate());
    secondUser.azzeraChiamate();
    console.log("Numero Chiamate da Luigi after reset:", secondUser.getNumeroChiamate());
});
var thirdUser = new User();
thirdUser.ricarica(30);
callN3.addEventListener("click", function () {
    if (thirdUser.carica > 0.2) {
        var randomNumber = Math.floor(Math.random() * 20) + 1;
        thirdUser.chiamata(randomNumber);
        logMessage("Saldo Rimanente Peach: " + thirdUser.numero404().toFixed(2));
    }
    else {
        alert("Peach non ha credito sufficiente");
    }
});
resultsN3.addEventListener("click", function () {
    logMessage("Chiamate effettuate da Peach: " + thirdUser.getNumeroChiamate());
    thirdUser.azzeraChiamate();
    console.log("Numero Chiamate da Peach after reset:", thirdUser.getNumeroChiamate());
});
