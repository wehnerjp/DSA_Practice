# Merge Sort

Recursive sort, splits the array down by half until single value is left, and then merge each value back together one by one

if low is < high find middle (low + high) / 2
call itself (mergeSort) recurvisely with low, mid and mid+1, high
then call merge with low, mid, and high

Merge is done in post order traversal

Tree Recursive Structure
Outer loop: Log n levels
Inner loop: We look at all (n) items on each level

Recursively call split([array, array, array, array])
Then merge subroutine to compare and combine moving back up the call stack

**Pros:**

    Only stable optimal sort

    Time Complexity: n*log(n)
    Space Complexity: O(n)

``` ts
    function mergeSort(arr) {
    const half = arr.length / 2;

    // the base case is array length <=1
    if (arr.length <= 1) {
        return arr;
    }

    const left = arr.splice(0, half); // the first half of the array
    const right = arr;
    return merge(mergeSort(left), mergeSort(right));
    }


    function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
```