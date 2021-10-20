function clone(source) {
   return {...source};
}

const objA = {
   id: 1,
   name: 'Pepito',
   age: 30,
   country: 'Spain'
}

console.log(clone(objA));
console.log(clone(objA) === objA);



const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
   return {...clone(target), ...clone(source)};
}

console.log(merge(a,b));