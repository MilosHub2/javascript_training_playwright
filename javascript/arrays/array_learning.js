const cities = ["Praha", "Brno", "Ostrava"];
console.log(cities);
console.log("Druhe mesto: " + cities[1]);
cities.push("Olomouc");
console.log(cities);
cities.push("Svindík");

for (let i = 0; i < cities.length; i++) {
  console.log("Mesto " + cities[i]);
}
