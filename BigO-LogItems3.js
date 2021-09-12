// O(n^2 + n) Operation; Dropping Non-Dominant -> O(n^2)

function logItems(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }

    for(let k = 0; k < n; k++) {
        console.log(k)
    }

}

logItems(3)

// O(1)

function addItems(n) {
    return n + n
}