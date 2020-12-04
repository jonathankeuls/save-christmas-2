import { randomArray, swap } from './helpers.js'

const a = randomArray(100, 10) 

function bubbleSort(a) {
for (let j = 0; j < a.length - 1; j++) {
    for (let i = 0; i < a.length - 1 - j; i++) {
        if (a[i] > a[i + 1]) {
            swap(a, i, i + 1)
        }
    }
}
}

const arr = [2, 4, 6, 10, 5, 7, 8, 3, 4,]
bubbleSort(arr)
console.log(arr)
bubbleSort(a)
console.log(a)