
# Arrays & Sorts

Continuous block of cells in computer memory
  
    Good for: Retrieving items
    Bad for: Adding new items (If not in JS or Python)

## Stack + Queue

Abstract data types and linear data structures.

Can be implemented using Arrays

* Stack: is LIFO, important for Depth First Search
* Queue is FIFO
  
    Good for: Efficienct add + remove
    Bad for: Limited use cases

## Sorting

Naive Sorts: Bubble, Selection, Insertion
Optimal Sorts: Merge, Heap, Quick

Javascript:

    [0, 4, 3, 3].sort()

Uses quick or merge under the hood

### Sort Stability

#### Stable

When you're sorting an object by two criteria (ie name, age) it maintains relative order.  Sort by age and then if that is the same by name.  
Merge, bubble, insertion
    Unstable: Would just ignore first criteria when sorted by second criteria.  Selection, heap, quick

### Bubble Sort

Time Complexity: O(n^2)
Space Complexity: O(1)

    Don't Use

Traverse array in pairs swapping elements if the first is greater than the second.  

After each iteration, the greatest value of the array becomes the last index of the array. in each iteration, the comparison happens till the last unsorted element.

### Merge Sort

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

### Quick Sort

Divide and conquer - recursive algorithm

Pivot element divides array

Smaller elements on the left side
Larger on the right side

choose a pivot (typically first or last)
i at first element, j at last element
increment i until its larger than pivot element
decrement j until its smaller than pivot element
swap i and j
continue

Recursively:

1. Bring Pivot so that left is smaller, right is bigger
2. quick sort left
3. quick sort right

N elements
log(n) swaps
**Pros:**

    Time Complexity: n*log(n) average, O(n^2) worst
    Space Complexity: O(log(n))

## Sort Wars

| Array Condition | Best Option |
| -------- | ------- |
| Randomized  | Quick sort    |
| Randomized - Limited Values | Merge sort     |
| Reversed    | Merge Sort    |
| Almost Sorted | Merge sort     |
| Sorted    | Merge Sort    |

### Overall

Merge sort is faster
Quick sort has better space complexity
