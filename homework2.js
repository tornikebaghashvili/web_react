//task 2.1
const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 }
];
function chekage(users){
    if(users[0].age < users[1].age && users[0].age < users[2].age){
        return users[0].name;
    }else if(users[1].age < users[0].age && users[1].age < users[2].age){
        return users[1].name;
    }else{
        return users[2].name;
    }
}
console.log(chekage(users))