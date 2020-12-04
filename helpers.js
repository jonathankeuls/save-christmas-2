
export function randomArray(len, n) {

    // Skapa en ny tom array av längd len
    const a = new Array(len)

    // Fyll varje plats i arrayen med ett random heltal
    for (let i = 0; i < a.length; i++) {
        a[i] = randomInt(n)
    }

    return a
}

function randomInt(n) {
    return Math.floor(Math.random() * (n + 1))
}

export function swap(a, i, j) {
 let temp = a[i]
 a[i] = a[j]
 a[j] = temp
}

const array = [1, 2, 4, 5, 8, 2, 6]
swap(array, 0, 6)
console.log(array)
