// RECAP JS :)

// variabili
// una variabile è un contenitore per un valore
let x = 50
const y = 100

x = 500
// y = 1000 // errore! perchè y è stata dichiarata con const, è una costante, il suo valore iniziale è quello definitivo

// cosa possiamo salvare in una variabile? quali sono i tipi di dato PRIMITIVI in JS?
// strings
// numbers
// boolean
// undefined (indica che a quella variabile non è mai stato assegnato un valore)
// null (indica l'esplicita assenza di un valore)

let stefano
// console.log(stefano) --> undefined

// JS è un linguaggio DEBOLMENTE TIPIZZATO (weakly typed)
// è possibile cambiare non solo il valore ma anche il tipo di una variabile
x = true
// non è una buona prassi!

console.log(x) // true
console.log(typeof x) // 'boolean'

const myString = 'Hello World!'
console.log(myString.toLocaleUpperCase()) // 'HELLO WORLD'

const myNumber = 50
myNumber.toString() // metodo che converte un numero in stringa

// DATI NON PRIMITIVI (array e gli oggetti)
// ARRAYS
const myArray = [1, 'ciao', true] // un po' inusuale, normalmente si lavora con array dotati di elementi tutti dello stesso tipo

const bigNumbers = [500, 234, 789]

// cosa si può fare con gli array?
// potete inserire nuovi valori:
bigNumbers.push(1000) // aggiunge 1000 come ultimo valore
bigNumbers.pop() // elimina l'ultimo valore (che era mille)
console.log(bigNumbers) // [500, 234, 789]

// come accedo agli elementi di un array? attraverso la loro POSIZIONE (indice)
bigNumbers[0] // --> 500
bigNumbers[1] // --> 234

// programmaticamente accedere all'ultimo elemento di un array magari molto lungo
// se bigNumbers.length mi torna la lunghezza dell'array, quindi 3, so che l'ultima posizione valida sarà sempre length - 1
bigNumbers[bigNumbers.length - 1] // tornerà SEMPRE l'ultimo elemento di bigNumbers

bigNumbers.slice(0, 2) // --> [500, 234]
// slice NON altera l'array di partenza
bigNumbers.splice() // splice altera l'array di partenza

// OBJECTS
// un oggetto in JS è sempre una struttura atta a contenere multipli valori, e li salva in COPPIE chiave/valore

const myObject = {
  lastName: 'Casasola',
  'is-old': true,
  firstName: 'Stefano',
  area: {
    city: 'Gorizia',
    zipCode: 34170,
    rivers: ['Isonzo'],
  },
}

// in un oggetto i valori si estraggono tramite il nome della loro PROPRIETÀ
// dot notation
myObject.firstName // 'Stefano'
myObject.area.zipCode // 34170
// square-brackets notation
myObject['is-old'] // true

// come accedo al valore "Isonzo"?
myObject.area.rivers[0] // "Isonzo"

// creazione di COPIE di dati
// in JS c'è differenza tra la creazione di una copia se il dato è un dato primitivo o se è un array/oggetto

let num1 = 50
let num2 = num1
// num1 e num2 sono due variabili completamente separate che ospitano entrambe il valore 50

num2 = 100
console.log(num1) // 50
// andando a modificare il valore di una, non si modifica il valore dell'altra

// le cose cambiano quando parliamo di array/oggetti
let obj1 = { name: 'Stefano' }
let obj2 = obj1
// obj2 NON È UNA COPIA DI obj1!

// obj2.name = 'Mario'
// console.log(obj1.name) // 'Mario'

// come creo fisicamente una copia dell'oggetto/array?
// METODO FUNZIONANTE PER OGGETTI O PER ARRAY (se utilizzato lo spread tra le [])
obj2 = { ...obj1 } // spread operator --> creare una deep copy
obj2.name = 'Mario'
// console.log(obj1.name) // 'Stefano'

let arr1 = [50, 60, 70]
arr2 = [...arr1] // ho creato un nuovo array, con contenuto [50, 60, 70], e lo sto chiamando arr2
arr2.pop()
console.log(arr1) // [50, 60, 70]

// METODO ALTERNATIVO (solo per gli oggetti)
obj2 = Object.assign({}, obj1)
obj2.name = 'Mario'
// console.log(obj1.name) // 'Stefano'

// costrutti condizionali
// if/else
let cartTotal = 40

let shippingCost = 5
let freeShippingThreshold = 50 // ammontare richiesto per avere la spedizione gratis

let total // ?

// quant'è il totale?
if (cartTotal >= freeShippingThreshold) {
  total = cartTotal
} else {
  total = cartTotal + shippingCost
}

console.log('Il totale è ', total) // 45

// ternary operator
let anotherTotal =
  cartTotal >= freeShippingThreshold
    ? cartTotal // valore in caso di condizione a TRUE
    : cartTotal + shippingCost // valore in caso di condizione a FALSE

// CICLI
// for -> eseguono un blocco di istruzioni un numero finito di volte
// while -> continuano ad eseguire un blocco di istruzioni fino a che la condizione non è più vera

for (let i = 0; i < 5; i++) {
  // blocco di istruzioni che verrà ripetuto per 5 volte
  console.log('bau!', i)
}

let arrToCycle = [5, 78, 2, 56]

for (let i = 0; i < arrToCycle.length; i++) {
  // blocco di istruzioni che verrà ripetuto per 4 volte, perchè ci fermiamo prima che i diventi 4
  console.log('bau!', i)
  console.log(arrToCycle[i]) // stampa prima 5, poi 78, poi 2, poi 56
}

arrToCycle.forEach((el) => {
  console.log('bau!', el) // el è 5, poi 78, poi 2, poi 56
  // ottengo 4 'bau!' in console
})

const incrementedArray = arrToCycle.map((seba) => {
  // il nome del parametro è a vostra scelta :) come sempre!
  return seba + 1
  // genero un nuovo array così: [6, 79, 3, 57]
})

// F U N Z I O N I
// una funzione è un blocco di codice riutilizzabile.
// una funzione va prima DICHIARATA e poi INVOCATA (utilizzata)

const bark = function () {
  console.log('bau!', this)
  // this è il button
}

// bark non funziona finchè non la invochiamo!
bark() // 'bau!'
bark() // 'bau!'

document.getElementById('bau').addEventListener('click', bark)

// una funzione si può anche definire con un altro costrutto chiamato ARROW FUNCTION
const meow = () => {
  console.log('mao!', this)
  // this è la window
}

const immediateReturn = () => 10 * 10 // le funzioni freccia possono tornare immediatamente un valore
// omettendo le graffe e omettendo la parola "return"
console.log(immediateReturn() + 1)

meow() // 'mao!'
meow() // 'mao!'

document.getElementById('mao').addEventListener('click', meow)

const calculateArea = function (l1, l2) {
  return l1 * l2
}

calculateArea(2, 3)
calculateArea(3, 4)

const printNTimes = function (times) {
  for (let i = 0; i < times; i++) {
    console.log('stampo', i)
  }
}

printNTimes(10)
printNTimes(3)
