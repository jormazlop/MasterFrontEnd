const concat = (a, b, ...args) => {

   let resultat = [...a, ...b];

   for (let arg of args) {
      resultat.push(...arg);
   }

   return resultat;
};

const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 10]
const array3 = ['a', 'b', 'c', 'd', 'e', 'f']
const array4 = [43, 'prueba', 55, 147, 23, 'prueba2']


console.log(concat(array1, array2, array3, array4));