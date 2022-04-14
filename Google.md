# Google Study Guide

## Big O

![Big O Poster](big-o-cheat-sheet-poster.png)

    Big-O: A way to mathematically determine program efficiency, how runtime scales with respect to some input variables.

    Space Complexity: Amount of memory something uses

* Time complexity is measured in the number of operations rather than time because of differences in computer processing power
* Operations is a better objective measure
* O(n) is a linear relationship
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

Tree Recursive Structure
Outer loop: Log n levels
Inner loop: We look at all (n) items on each level

Recursively call split([array, array, array, array])
Then merge subroutine to compare and combine moving back up the call stack

**Pros:**

    Only stable optimal sort

    Complexity: n*log(n)

### Quick Sort

Divide and conquer

Pivot element divides array

Smaller elements on the left side
Larger on the right side

Recursively:

1. Bring Pivot so that left is smaller, right is bigger
2. quick sort left
3. quick sort right

N elements
log(n) swaps
**Pros:**

    Complexity: n*log(n) average, O(n^2) worst

## Trees

### Tree Basics

#### What is a tree?

* Hierachical Graph
* Expands out in only one direction
  * Can represent a parent child relationship or nested elements in html

#### Basic Tree Construction Algorithms

#### Basic Tree Traversal Algorithms

#### Basic Tree Manipulation Algorithms

### Types of Trees

#### Binary Trees

* Lots of rules, but allow for efficient searches
* Each node has 0-2 children
* Left < Node
* Right > Node
* Adding elements in weird order can make it unbalanced or one sided and search optimization dissipates

#### Balanced Binary Trees and implementation

* Self balanced trees
Red Black

Splay tree
AVL tree

#### N-ary trees

#### Trie-trees

### Tree Traversal Algorithms

#### Breadth First Search

* Use Queues
  
#### Depth First Search

* Use Stacks

    Inorder:
    Postorder:
    Preorder:

## Graphs

* Similar to a linked list in that you have nodes linked to other nodes
* In this case the pointers are called edges and edges can have numbers assigned to them ie the length between new york and LA
* Social Media relationships are represented in graphs

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
