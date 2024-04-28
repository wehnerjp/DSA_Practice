# Google Study Guide

## Big O (Omicron)

A way to mathematically determine program efficiency, how runtime scales with respect to some input variables.

![Big O Poster](./images/big-o-cheat-sheet-poster.png)

Big O is used to represent <b>time complexity</b> and <b>space complexity</b>

Big O measures worst case performance (Omnicron)

    Complexity Measures:
    * Theta - Average
    * Omicron - Worst
    * Omega - Best

### Time Complexity

The number of operations an algorithm performs to complete a process

* Measured in the number of operations rather than time
* Operations is a better objective measure than time because of differences in computer processing power

### Space Complexity

The amount of memory something uses

    Common Big O Variables - Quick Facts

    * O(n) is a linear relationship; Proportional; Has a linear slope
    * O(n^2) is a quadratic relationship; Loop within a Loop
    * O(1); Constant relationship
    * O(log n) is a logarithmic relationship; Halving the problem size each step; Divide and Conquer; Has to be sorted data
    * O(n log n) is a linearithmic relationship; Merge Sort, Quick Sort; Most efficient you can make a sorting algorithm unless your sorting only numbers that are mostly presorted

### Different Terms for Inputs - gotcha interview question

If you pass in (a, b) to two separate for loops in a function, you can’t give big o notation of O(n) because you can’t say a and b are = n so it is O(a + b) simplified

If they were nested it would be O(a * b)

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

## Linked list compared to arrays

Arrays have indexes not LL

Arrays are in contiguous places in memory LL can be all over

Head points to first items tail is last they all point to the next last points to null

Null terminated list

LL node is the value and the pointer, obj with value, next

Set of nested objects

Every method creates a new node for linked lists create a separate class to create nodes

## Stack + Queue

* Stack: is LIFO, important for Depth First Search
* Queue is FIFO; queue from the tail dequeue from the head
  
    Good for: Efficienct add + remove
    Bad for: Limited use cases

### Queues

given an array with a queue you add from one end and remove from another.  It doesnt matter which.

Because of that either add or remove will be O(n)

With a linked list pop is O(n) push is O(1)

However on the front both shift and unshift are O(1) so you never want to dequeue from the tail end because thats O(n)

## Stacks

* Can only remove last item added: LIFO
* Pop from the stack until get to desired point
* Back button is an example of a stack
* Array is implementation of stack
* With a stack can add and remove from same end doesn't matter which
* Add/Remove to end of an array: O(1)
* Add/Remove to beginning is O(n) because of reindexing
* With Linked List stack the left is always the bottom.  The null terminated end is always at the bottom.  This way adding is O(1) instead of O(n)

Shift and unshift will be pop/push with some alteration

Instead of head tail there is just a top

## [Hashtables](./data_structures/hash_tables.md) (Objects)

* For any problem, have Hashtables at the top of your mind when exploring technique to solve the problem
* Getting and setting is assumed constant time but could be linear
* Common implementations in programming languages:
  * JavaScript/JSON - Object
  * Python - Dictionary
* Good for:
  * Add
  * Remove
  * Retrieving
* Bad for:
  * Key Collisions (Handled in high level languages)

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

## [Graphs](./data_structures/graphs)

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
