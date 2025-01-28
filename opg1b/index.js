//Opg 1b.1:
// Sker der noget hvis funktionen bliver kadt inden den er erklæret?
//- Nej der sket ikke noget, den vises ikke i konsollen.

//Laves en funktion der hedder sayHello, og hedder  parameteren firstName.
// sayHello("maria")
// function sayHello(firstName) {
//     //i konsollen siger vi den skal skrive hello, først og derefter definere parameteren.
//     console.log(`hello ${firstName}`);
// }

//her kalder vi funkionen, med parameteren maria i dette tilfælde.

//Opg 1b.2:
// Sker der noget hvis funktionen bliver kaldt med en variabel der hedder myName?
//- Der skal både skiftes navn på variaqbel og funktionen før at den vil vises i konsollen, ellers passer de ikke sammen.

//Laves en funktion der hedder sayHello, og hedder  parameteren firstName.
// sayHello("maria")
// function sayHello(myName) {
//     //i konsollen siger vi den skal skrive hello, først og derefter definere parameteren.
//     console.log(`hello ${firstName}`);
// }

//her kalder vi funkionen, med parameteren maria i dette tilfælde.

//Opg 1b.3:
//sker der noget hvis der er en anden variabel der hedder firstName uden for funktionen?
// - der sker ikke noget, ingentign ændre sig. Men hvis jeg gerne ville bruge variablen, skulle jeg nede i funktionen lave den om. Så ville den melig kalde på variablen.

// let firstName = "hund";

// //Laves en funktion der hedder sayHello, og hedder  parameteren firstName.
// function sayHello(firstName) {
//     //i konsollen siger vi den skal skrive hello, først og derefter definere parameteren.
//     console.log(`hello ${firstName}`);
// }

// //her kalder vi funkionen, med parameteren maria i dette tilfælde.
// sayHello(firstName)

//Opg 1b.4:
//Sker der noget hvis funktionen bliver kaldt uden noget parameter
// - Konsollen siger "undefined", fordi den ikke ved hvad den skal vise. Parameteren er ikke defineret i min funktion "satHello".

// //Laves en funktion der hedder sayHello, og hedder  parameteren firstName.
// function sayHello(firstName) {
//     //i konsollen siger vi den skal skrive hello, først og derefter definere parameteren.
//     console.log(`hello ${firstName}`);
// }

// //her kalder vi funkionen, med parameteren maria i dette tilfælde.
// sayHello()

//Opg 1b.5:
//Sker der noget hvis funktionen bliver kaldt med firstName og lastName?
// - Hvis jeg skriver firstName og lastName i min funktion, og definere på dem i conssole.log, vil den vise det i konsolle. Men hvis jeg ikke skiver et efternavn nede i funktionen med min parameter, vil den blot skrive undefined.

//Laves en funktion der hedder sayHello, og hedder  parameteren firstName.
// function sayHello(firstName, lastName) {
//   //i konsollen siger vi den skal skrive hello, først og derefter definere parameteren.
//   console.log(`hello ${firstName} ${lastName}`);
// }

// //her kalder vi funkionen, med parameteren maria i dette tilfælde.
// sayHello("maria", "willow");


//Opg 1b.6:
//Sker der noget hvis funktionen bliver kaldt med lastName før firstName?
// - Den bytter blot rundt på hvad den tror jeg hedder til first name og last name. Nu hvor jeg har byttet rundt på den, tror den bare jeg hedder willow maria. 
//Laves en funktion der hedder sayHello, og hedder  parameteren firstName.
// function sayHello(firstName, lastName) {
//     //i konsollen siger vi den skal skrive hello, først og derefter definere parameteren.
//     console.log(`hello ${firstName} ${lastName}`);
//   }
  
//   //her kalder vi funkionen, med parameteren maria i dette tilfælde.
//   sayHello("willow", "maria");
  
  