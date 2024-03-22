// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.

let personName : string = "kabeer";
console.log("Lowercase : " + personName.toLowerCase());
console.log("Uppercase : " + personName.toUpperCase());
let title_case = personName[0].toUpperCase() + personName.slice(1).toLowerCase();
console.log("titlecase : " + title_case);






