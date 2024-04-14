// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.
function toupperCase(str) {
    return `${str}`.toUpperCase();
}
let input_string = "kabeer";
let converted_upper = toupperCase(input_string);
console.log("Uppercase : " + converted_upper);
function tolowerCase(str) {
    return `${str}`.toLowerCase();
}
let inputString = "Kabeer";
let converted_lower = tolowerCase(inputString);
console.log("Lowercase : " + converted_lower);
let personName = "kabeer";
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log("Titlecase : " + titlecaseName);
export {};
