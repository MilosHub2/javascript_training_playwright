let firstName = "Petr"; // ? Deklarace + inicializace proměnné
// ! NE: "Petr" = let firstName

console.log(firstName); // Vypíše hodnotu proměnné firstName

let lastName; // ? Deklarace proměnné
console.log(lastName);

lastName = "Fifka"; // ? Inicializace proměnné
console.log(lastName);

console.log(firstName + lastName); // ! Pozor! Sloučení stringů nedělá mezery
console.log(firstName + " " + lastName); // ! Přidání mezery mezi dva stringy

lastName = "Svoboda"; // ? Reinicializace proměnné Fifka => Svoboda
console.log(lastName);

firstName = "Adam";
console.log(firstName);

// * var proměnná
// ! var bychom neměli používat z důvodu toho, že je zastaralý.
var city = "Praha";
// ! U var je možná redeklarace
var city; // * Přepsal jsem proměnnou city
console.log(city); // !po vypisania do konzole stale ostane praha

{
  var street = "Ulica";
}

console.log("Var je i mimo blok: " + street);
var continent; // * var je mozne deklarovat bez inicializace
continent = "Europa";
continent = "Asie";

// * let proměnná
let country = "CZ";

{
  let carBrand = "Škoda";
  console.log("Country sa prenaša do bloku: " + country);
}

// console.log("Mimo blok už nemám carBrand : " + carBrand); // ! ReferenceError: carBrand is not definied

// let country; // ? Není možné redeklarovat let, chyba: Cannot redeclare block-scoped variable 'country'.ts(2451)

// * const - konstanta
const computer = "Notebook";
//const computer; // * Není možne redeklarovat cons
//const computer = "Desktop"; // ! neni možne zmenit hodnotu v const, pri spusteni vyhodi chybu
//const isActive; // ! neni možné dektlarovat const bez inicializace SyntaxError: Missing initializer in const declaration

{
  const phone = "123456"; // *const -> izolace vo vnutri bolku
}

//console.log("Mimo blok už nemám phone : " + phone); // ! ReferenceError: chyba phone is not definied

// * Poznamky

/*
Vice
Riadkova
Poznamka
*/

/**
 * **Tučný nadpis**
 * Píšu v Markdown ~přeškrtnutý text~
 *
 * ```js
 * console.log("Petr")
 * ```
 */
function none() {}
