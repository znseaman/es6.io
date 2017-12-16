// Named Export
export const apiKey = 'abc123';
export const url = 'http://wesbos.com';

export function sayHi(name){
  console.log(`Hello there ${name}`);
}

const age = 28;
const dog = 'Lola';

export { age as myAge, dog as myDog };
