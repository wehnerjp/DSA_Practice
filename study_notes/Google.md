# Google Study Guide

## Big O (Omicron)

A way to mathematically determine program efficiency, how runtime scales with respect to some input variables.

![Big O Poster](./images/big-o-cheat-sheet-poster.png)

Big O is used to represent <b>time complexity</b> and <b>space complexity</b>

#### Time Complexity

    The number of operations an algorithm performs to complete a process

* Measured in the number of operations rather than time
* Operations is a better objective measure than time because of differences in computer processing power

#### Space Complexity

    The amount of memory something uses

#### Common Big O Variables - Quick Facts

* O(n) is a linear relationship; Will always be proportional; Has a linear slope
* O(n^2) is a quadratic relationship
* O(1) is a constant relationship
* Big O measures worst case performance Omnicron

### Process

1. Add different steps ie loops
2. Drop Constants O(2n) becomes O(n)
3. Different inputs => different variables.  AxB is not n^2 its O(a*b)
4. Drop non-dominant terms:  In O(n+n^2) you drop n because n^2 drives the run time scaling

## Linked List

* Building block is a node
* A node has a value and the value of the next node
  
    Good for: Adding new items, deleting items
    Bad for: retrieval and searching

## Array

* Continuous block of cells in computer memory
  
    Good for: Retrieving items
    Bad for: Adding new items (If not in JS or Python)

## Stack + Queue

* Stack: is LIFO, important for Depth First Search
* Queue is FIFO
  
    Good for: Efficienct add + remove
    Bad for: Limited use cases

## Hashtables (Objects)

* For any problem, have Hashtables at the top of your mind when exploring technique to solve the problem
* Getting and setting is assumed constant time but could be linear
* An object in JavaScript
* A Dictionary in Python

    Good for: Add + Remove, Retrieving
    Bad for: Key Collisions (Handled in high level languages)
  
### Basics

    Hashtables are a key-value lookup
    Search for Mary (key) and get height and weight (value)

* Given a key, associate a value with it for very quick lookup
* Both key and value can be any type of data structure as long as you have a hash function
* String is commonly used
* We want to store objects in an array
* Hash function determine how we jump from a string to a particular index of the array
    Hash function = string -> integer (hashcode) -> index in array -> object

Like arrays, hash tables provide constant-time O(1) lookup on average, regardless of the number of items in the table. The (hopefully rare) worst-case lookup time in most hash table schemes is O(n).

* index of the array is not the hash code
  * Primarily because the array that stores the value might be much smaller than all the potential hash table values
* Two strings could have the same hash code
* Two things with different hash codes could wind up mapping to the same index (Collision)

### Collision

    When an item maps to the same spot in memory.

Chaining is the most common solution for collision

    Chaining: When there is a collision, store them in a linked list

With a chaining solution you have to run through all the values in the linked list and pull out the value for the corresponding key

With a chaining linked list you now not only include the object, but also the key

    Separate Chaining: putting multiples in same address space

    Linear Probing: [Open Addressing] Another approach would be to go to next item and see if its open if there is already an item at the address space

### Implementation using only arrays

## Sorting

Naive Sorts: Bubble, Selection, Insertion
Optimal Sorts: Merge, Heap, Quick

Javascript:

    [0, 4, 3, 3].sort()

Uses quick or merge under the hood

Sort Stability:

    Stable: When you're sorting an object by two criteria (ie name, age) it maintains relative order.  Sort by age and then if that is the same by name.  Merge, bubble, insertion
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

### Sort Wars

Randomized Array: Quick sort wins

Randomized array with limited values: Merge sort wins

Reversed Array: Merge Sort wins

Almost Sorted: Merge Sort

Sorted: Merge Sort

Merge sort faster overall

Quick sort has better space complexity

## Trees

### Tree Basics

Make search easy.  With int can compare with root, if larger check right node, if smaller than right node check left of right node etc.

Binary Tree: 0-2 child nodes (left & right) - can be null

#### What is a tree?

* Hierachical Graph
* Expands out in only one direction
  * Can represent a parent child relationship or nested elements in html

### Types of Trees

#### Binary Search Trees

* Lots of rules, but allow for efficient searches
* Each node has 0-2 children
* Left < Node
* Right > Node
* Adding elements in weird order can make it unbalanced or one sided and search optimization dissipates
* With each search operation we chop off about half of the nodes

Balanced:

* insert: o(log n)
* find: o(log n)

Unbalanced:

* insert: o(n)
* find: o(n)

#### Balanced Binary Trees and implementation

Balance algorithms are built into a lot of programming languages so you'll just assume you have a balanced tree

##### Heap

A complete binary tree that stores the min or max in root node

Insertion: Next empty spot top to bottom left to right

Post insert, element bubbles up to right spot

When removing root, swap with last element added, then bubble down

Can use an array to store values

Simple equation can map to left child (index x 2+1),
right child (index x 2+2), or parent ((index - 1)/2)

Don't need overhead of node class

* Self balanced trees
Red Black

Splay tree
AVL tree

#### N-ary trees

#### Trie-trees

#### Basic Tree Construction Algorithms

Inserts work much like finding value

Compare to root, bigger = go right, smaller = go left
Until we get to empty spot or null node, then we insert new element

#### Basic Tree Traversal Algorithms

    Pre-order: Root, Left, Right
    In-order: Left, Root, Right
    Post-order: Left, Right, Root

Typically in BST we traverse in order because that allows the nodes to be printed in order

Insert and find operate recursively from root
if value is less and left is non empty go left, else insert in left
if value is greater and right is non empty go right, else insert in right

find/contains return boolean checking if value exists based on same function

#### Basic Tree Manipulation Algorithms

### Tree Traversal Algorithms

#### Breadth First Search

* Goes Broad (to neighbors) before going deep (to children)
* Need flag or some way of preventing infinite loop
* Iterative using queue

* NextToVisit linked list, add source node to queue
* If NTV isn't empty, isn't destination, and isn't visited, remove from NTV, add to visited, and then add adjacent nodes to NTV queue
  
#### Depth First Search

* Use Stacks
* Recursive Algorithm
* Simpler
* "Does each node adjacent to S have a path to T?"
* Not necessarily shortest path
* Have to use isVisited flag to avoid recursive loop; Best implemented by adding nodes to hash set then visiting
* DFS path is best implemented using a linked list

    Goes Deep (to children) before going broad (to neighbors)

Might run really far away: T could be adjacent, but we go all the way through another adjacent node to find it instead

    Inorder:
    Postorder:
    Preorder:

## Graphs

* Similar to a linked list in that you have nodes linked to other nodes
* In this case the pointers are called edges and edges can have numbers assigned to them ie the length between new york and LA
* Social Media relationships are represented in graphs

    Directed: A -> B; One way relationship
    Indirected:

### Representations of graphs in memory

#### Objects and Pointers

    Pros: 
    Cons:

#### Matrix

    Pros: 
    Cons:

#### Adjacency List

    Pros: 
    Cons:

### Traversal Algorithms

#### Breadth-First Search

    Computational Complexity
    Tradeoffs:
    Implementation:

#### Depth-First Search

    Computational Complexity
    Tradeoffs:
    Implementation:

Dijkstra:

A*:

## Other

    NP-Complete Problems:
        NP-Complete Meaning:
        Traveling Salesmen:
        Knapsack:
        How to recognize:

## Math

### Discrete Math 101

### Combinatorics

### Probability

### N-choose-K Problems
