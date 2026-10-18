const userNames = ["Jozef", "Marek", "Michal", "Michaela", "Peter"];
const userSurnames = ["Žák", "Novič", "Jahnak", "Cisar", "Peridal"];

userNames.forEach((username, index) => {
  console.log(`Meno: ${username} + Priezvisko: ${userSurnames[index]}`);
});
