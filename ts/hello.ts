function sayHello(person: string) {
  return `hello,${person}`
}

let user = `Tom`
console.log(sayHello(user))

interface Person {
  name: string;
  age: number;
}
let tom: Person = {
  name: `Tom`,
  age: 25
}
