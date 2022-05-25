// Starting array
let array = [1, 4, 11, 2, 37, -4]
// Write your solution below:

let smallest = array[0]
let largest = array[0]

for (let i = 0; i < array.length; i++) {
    if (smallest > array[i]) {
        smallest = array[i]
    } else if (largest < array[i]) {
        largest = array[i]
    }
}

console.log(smallest, largest)