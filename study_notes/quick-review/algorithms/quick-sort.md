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
