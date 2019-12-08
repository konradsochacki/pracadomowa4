// 1) Extend String type with the reverse() function.
// The function is to reverse the value of the string on which it was called.

// String.prototype.reverse = function() {
//   console.log(
//     this.split("")
//       .reverse()
//       .join("")
//   );
// };

// "Czwartek".reverse();

// var Osoba = function() {
//   this.umieMowic = true;
// };

// Osoba.prototype.powitaj = function() {
//   if (this.umieMowic) {
//     console.log("Hej, jestem " + this.imie);
//   }
// };

// var Pracownik = function(imie, tytul) {
//   Osoba.call(this);
//   this.imie = imie;
//   this.tytul = tytul;
// };

// Pracownik.prototype = Object.create(Osoba.prototype);
// Pracownik.prototype.constructor = Pracownik;

// Pracownik.prototype.powitaj = function() {
//   if (this.umieMowic) {
//     console.log("Hej, jestem " + this.imie + ", " + this.tytul);
//   }
// };

// var Klient = function(imie) {
//   Osoba.call(this);
//   this.imie = imie;
// };

// Klient.prototype = Object.create(Osoba.prototype);
// Klient.prototype.constructor = Klient;

// var Mim = function(imie) {
//   Osoba.call(this);
//   this.imie = imie;
//   this.umieMowic = false;
// };

// Mim.prototype = Object.create(Osoba.prototype);
// Mim.prototype.constructor = Mim;

// var bob = new Pracownik("Bob", "Builder");
// var joe = new Klient("Joe");
// var rg = new Pracownik("Red Green", "Handyman");
// var mike = new Klient("Mike");
// var mim = new Mim("Mim");

// bob.powitaj();
// // Hej, jestem Bob, Builder

// joe.powitaj();
// // Hej, jestem Joe

// rg.powitaj();
// // Hej, jestem Red Green, Handyman

// mike.powitaj();
// // Hej, jestem Mike

// mim.powitaj();
