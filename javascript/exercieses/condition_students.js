const studentPoints = 98;
const studentName = "Jozef Mak";
const minimalPointPass = 80;
const redDiplom = 95;

if (studentPoints >= minimalPointPass && studentPoints <= redDiplom) {
  console.log(`$(studenName) prešiel s počtom ${studentPoints}`);
} else if (studentPoints >= redDiplom) {
  console.log(
    `$(studenName) presiel s cervenym diplomom s počtom bodov ${studentPoints}`,
  );
} else {
  console.log(`$(studenName) nepresiel`);
}

// toto neni ukol ze školeni, jenom civcne pri koukani videa, nehodnotit
