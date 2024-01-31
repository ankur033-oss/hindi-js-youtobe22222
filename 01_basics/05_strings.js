const name = "ankur"
const repocount = 34

// console.log(name + repocount + "value")   outdated syntax

console.log('Hello my name is ${name} and my repocount is ${repocount}');

const gameName = new String('ankursk')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));
// mdn docs

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-7, 3);
console.log(anotherString);

const newString1 = "    ankur    "
console.log(newString1);
console.log(newString1.trim());
// mdn docs -> trim

const url = "https//ankur.com/ankur%20singh"
console.log(url.replace('%20','-'));

console.log(url.includes('ankur'))
console.log(url.includes('arya'))

console.log(gameName.split('-'));
