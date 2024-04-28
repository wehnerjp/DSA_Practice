# Trees

## What is a tree?

* A hierachical graph that expands out in only one direction. (From a root node)
* It can represent a parent child relationship or nested elements in html*
* A linked list is a form of a tree that doesn't fork
  * left and right traversal instead of next

## Tree Basics

* Top item is parent of child nodes
* Children are siblings when they share a parent node
* Never more than one parent of a node
* A node with no children is a leaf node
* A Tree doesn't have to be binary, but if there are only two child nodes it is binary
* We need something pointing to the top node (root node) so tree doesn't get garbage collected

### Tree Descriptors

* Full Tree: A node either points to two nodes or zero nodes
* Perfect tree: Every line with items is filled all the way across
* Complete tree: Still complete if line isn't filled

## Types of Trees

### Binary Search Trees

We sacrifice insert efficiency to make lookups and removes more efficient

* Lookup and remove advantage over Linked Lists because you don't have to iterate through every node
* Insert is less efficient than a Linked Lists because it for them doesn't matter if data is sorted you can just add the value onto the end (O(n) for Array or LinkedList)
* Node count can be expressed as 2^number of lines where number of lines represents the number of steps to traverse the tree
* Lots of rules, but allow for efficient searches
* Each node has 0-2 children
* Left < Parent Node
* Right > Parent Node
* Adding elements in weird order can make it unbalanced or one sided and search optimization dissipates
* With each search operation we chop off about half of the nodes

#### Balanced (Best Case)

* Evenly distributed nodes
* insert/remove/find: o(log n)

#### Unbalanced (Worst Case)

* Non forking nodes
* Tree is one long line
* insert/remove/find: o(n)

### Balanced Binary Trees and implementation

Balance algorithms are built into a lot of programming languages so you'll just assume you have a balanced tree

### Heap

A complete binary tree that stores the min or max in root node

* Insertion: Next empty spot top to bottom left to right
* Post insert, element bubbles up to right spot
* When removing root, swap with last element added, then bubble down
* Can use an array to store values
  * Don't need overhead of node class
  * Simple equation can map to
    * left child (index x 2+1),
    * right child (index x 2+2),
    * or parent ((index - 1)/2)

### Self balanced trees

Red Black
Splay tree
AVL tree

### N-ary trees

### Trie-trees

### Basic Tree Construction Algorithms

Inserts work much like finding value

When adding more you always starts at the top (root node) and compare all the way down

If tree is empty, insert at root.
Otherwise compare value to be inserted to root node, bigger = go right, smaller = go left
Until we get to empty spot or null node, then we insert new element

### Basic Tree Traversal Algorithms

    Pre-order: Root, Left, Right
    In-order: Left, Root, Right
    Post-order: Left, Right, Root

Typically in BST we traverse in order because that allows the nodes to be printed in order

Insert and find operate recursively from root
if value is less and left is non empty go left, else insert in left
if value is greater and right is non empty go right, else insert in right

find/contains return boolean checking if value exists based on same function

### Basic Tree Manipulation Algorithms

## Tree Traversal Algorithms

### Breadth First Search

* Goes Broad (to neighbors) before going deep (to children)
* Need flag or some way of preventing infinite loop
* Iterative using queue

* NextToVisit linked list, add source node to queue
* If NTV isn't empty, isn't destination, and isn't visited, remove from NTV, add to visited, and then add adjacent nodes to NTV queue
  
### Depth First Search

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