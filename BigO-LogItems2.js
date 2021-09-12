// O(n^2) Operation

function logItems(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }

}

logItems(3)

// O(n^3) Operation; Still written as O(n^2)

function logItemsToo(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            for(let k = 0; k < n; k++) {
                console.log(i, j, k)
            }
        }
    }

}

logItemsToo(3)