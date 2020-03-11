// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibonacci = (n) =>{
  let arr = [0,1];
  for (let i = 2; i < 11; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 return arr.slice(1)
}

console.log(fibonacci())


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

var sortedDataArray1 = fullArr1.filter((Number) => parseInt(Number) === Number);

let newArray = sortedDataArray1.sort((a,b)=> a-b);
let finalArray = newArray.filter(x => x%2)

console.log(finalArray)

var sortedDataArray2 = fullArr2.filter((Number) => parseInt(Number) === Number);

let newArray2 = sortedDataArray2.sort((a,b)=> a-b);
let finalArray2 = newArray2.filter(x => x%2)

console.log(finalArray2)


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

var middleLetters1 = "hello"
// Expected output: “l”

var middleLetters2 = "rhinoceros"
// Expected output: “oc”

function middle(str) {
  var position, length;
  if ((str.length % 2) == 0) {
    position = str.length / 2 - 1;
    length = 2;
  } else {
    position = (str.length - 1) / 2;
    length = 1;
  }

  return str.substring(position, position + length);
}
console.log(middle("hello"))
console.log(middle("rhinoceros"))



// --------------------4) Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

let Sphere = class {
	constructor(radius) {
		this.radius = radius;
	}
	get area() {
		return this.calcArea()
	}

	calcArea() {
		return ((this.radius * this.radius) * Math.PI * 4)
	}
}

const test = new Sphere (4);

console.log(test.area)



// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []



const cumulativeSum = (sum => value => sum += value)(0);

console.log(numbersToAdd1.map(cumulativeSum));
console.log(numbersToAdd2.map(cumulativeSum));
console.log(numbersToAdd3.map(cumulativeSum))