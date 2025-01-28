//Laves en funktion der hedder petPresent, og hedder  parametrene firstName, aimalType og animalName.
// function petPresent(firstName, animalType, animalName) {
//     //i konsollen siger vi den skal skrive hello, først og derefter definere parameteren. 
//     console.log(`My name is ${firstName}, i have a ${animalType} called ${animalName}`);
// }

// //her kalder vi funkionen, med parameteren maria i dette tilfælde. 
// petPresent("maria", "dog", "Sonja" )


//2b.1
//hvad sker der hvis funktionen bliver kaldt med variabler der hedder det samme som parametrene?
// - Så siger den at "petpresten" som jeg har kaldt funktonen før, ikke kan findes nogle steder.
//Laves en funktion der hedder petPresent, og hedder  parametrene firstName, aimalType og animalName. Og hvis jeg ændre funktionnavnet begge steder sker der ingen ændringer.
// function animalType(firstName, animalType, animalName) {
//     //i konsollen siger vi den skal skrive hello, først og derefter definere parameteren. 
//     console.log(`My name is ${firstName}, i have a ${animalType} called ${animalName}`);
// }

// //her kalder vi funkionen, med parameteren maria, dog og sonja i dette tilfælde. 
// animalType("maria", "dog", "Sonja" )

//2b.2
//hvad sker der hvis funktionen bliver kaldt med variabler der hedder noget andet?
// - Der sker ingen ændringer i koncollen.
//Laves en funktion der hedder petPresent, og hedder  parametrene firstName, aimalType og animalName.
// function mariaWillow(firstName, animalType, animalName) {
//     //i konsollen siger vi den skal skrive hello, først og derefter definere parameteren. 
//     console.log(`My name is ${firstName}, i have a ${animalType} called ${animalName}`);
// }

// //her kalder vi funkionen, med parameteren maria, dog og sonja i dette tilfælde. 
// mariaWillow("maria", "dog", "Sonja" )

//2b.3
//hvad sker der hvis funktionen bliver kaldt med strings?
// - Der sker ingen ændringer i koncollen.
// Laves en funktion der hedder petPresent, og hedder  parametrene firstName, aimalType og animalName.
function petPresent(firstName, animalType, animalName) {
    //i konsollen siger vi den skal skrive hello, først og derefter definere parameteren. 
    console.log(`My name is ${firstName}, i have a ${animalType} called ${animalName}`);
}

//her kalder vi funkionen, med parameteren maria, dog og sonja i dette tilfælde. 
petPresent("maria", "dog", "Sonja" )


//2b.4
//hvad sker der hvis funktionen bliver kaldt med variabler, men i en anden rækkefølge?
// - Ja så bliver rækkefølgen også lavet om i koncollen. Den henter stadigvæk de samme navne, og husk hvad der er hvad, men den laver pludseligt om i rækkefølgen. 
// Laves en funktion der hedder petPresent, og hedder  parametrene firstName, aimalType og animalName.
function petPresent(animalName, animalType, firstName) {
    //i konsollen siger vi den skal skrive hello, først og derefter definere parameteren. 
    console.log(`My name is ${firstName}, i have a ${animalType} called ${animalName}`);
}

//her kalder vi funkionen, med parameteren maria, dog og sonja i dette tilfælde. 
petPresent("maria", "dog", "Sonja" )
