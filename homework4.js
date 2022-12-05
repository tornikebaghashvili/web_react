//task.4.1
const newString = (string, valueToReplace, valueToReplaceWith) =>
  string.slice(0, string.indexOf(valueToReplace)) +
  valueToReplaceWith +
  string.slice(string.indexOf(valueToReplace) + valueToReplace.length);

console.log(newString("my name is giorgi", "giorgi", "tornike"));

//task.4.2

const newString2 = (words) => {
    return words.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(newString2("my country is georgia"))

//task.4.3

const users = [
  { name: "lasha", age: 30 },
  { name: "Saba", age: 20 },
  { name: "Tornike", age: 36},
  { name: "Tsotne", age: 9}
];
const sort = (users) => users.sort((a, b) => a.age - b.age);
console.log(sort(users))