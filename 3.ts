// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.
function toupperCase (str : string) {
    return `${str}` .toUpperCase()
}
let input_string : string = "kabeer"
let converted_upper : string = toupperCase(input_string)
console.log("Uppercase : " + converted_upper);

function tolowerCase (str : string) {
    return `${str}` .toLowerCase()
}
let inputString : string = "Kabeer"
let converted_lower : string = tolowerCase(inputString)
console.log("Lowercase : " + converted_lower);

let personName : string = "kabeer";
let words : string[] = personName.split(" ")
let titlecaseName : string = ""
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " "
}
console.log("Titlecase : " + titlecaseName);





