const head = array => {

   const [firstElement,...restArray] = array

   return firstElement;
}

const tail = ([first,...array]) => {
   return array;
}

const init = array => {
   return array.slice(0, -1);
}

const last = array => {
   return array.slice(-1);
}

const array = ['Primer elemento', 'Segundo elemento', 'Tercer elemento', 'Cuarto elemento'];

console.log(head(array));
console.log(tail(array));
console.log(init(array));
console.log(last(array));