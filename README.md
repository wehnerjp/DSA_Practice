# JS DS&A Course Notes

Linked Lists, Binary tree, array = data structure

**Big O** = way to mathematically determine program efficiency

Measure time complexity in the number of operations not time because fast computer would run slower code faster, operations is a better objective measure

Space Complexity = Amount of memory something uses

Time Complexity & Space Complexity

Omega

Theta

Omicron = Big O

When searching an Array best case (first index [0]) is omega

Average = Theta

Worst = Omicron

When we measure Big O we always measure worst case

O of N will always be proportional, linear slope

Drop Constants to simplify Big O notation


Drop Non-Dominants: Simplify Big O


O(n^2 + n)

n^2 is the dominant term


O(1): Constant time


O(log n)

Divide and conquer split check etc

Has to be sorted data

O(n log n)]

Most efficient you can make a sorting algorithm unless your sorting only numbers

Different Terms for Inputs - gotcha interview question

If you pass in (a, b) to two separate for loops in a function, you can’t give big o notation of O(n) because you can’t say a and b are = n so it is O(a + b) simplified

If they were nested it would be O(a * b)


# Big O of Arrays

Push and pop are O(1) operations, because there is no reindexing

Shift Unshift are O(n) where in is the number of items in the array because of reindexing

Search by value O(n) search by index O(1)

Array is great if you need to access things by index

Not great if you want to add and remove a lot of items at the beginning

O(n^2) = Loop within a Loop

O(n) = Proportional

O(log n) = Divide and Conquer

O(1) = Constant



# Pointers

Setting num 1 to num 2 is temporary

Object with a value is a ref point

If a var is assigned off one obj to another the other one still takes up space in memory, cleaned up with GC


# Linked list compared to arrays

Arrays have indexes not LL

Arrays are in contiguous places in memory LL can be all over

Head points to first items tail is last they all point to the next last points to null

Null terminated list

LL node is the value and the pointer, obj with value, next

Set of nested objects

Every method creates a new node for linked lists create a separate class to create nodes

# Stacks and Queues

## Stacks

Can only remove last item added: LIFO

Pop from the stack until get to desired point

Back button is an example of a stack

Array is implementation of stack

With a stack can add and remove from same end doesn't matter which

Add remove to end of an array: O(1) 
Beginning is O(n) because of reindexing

With Linked List stack the left is always the bottom.  The null terminated end is always at the bottom.  This way adding is O(1) instead of O(n) 

Shift and unshift will be pop/push with some alteration

Instead of head tail there is just a top

## Queues

Queue is FIFO 

Enqueue end Dequeue front

given an array with a queue you add from one end and remove from another.  It doesnt matter which.

Because of that either add or remove will be O(n) 

With a linked list pop is O(n) push is O(1)

However on the front both shift and unshift are O(1) so you never want to dequeue from the tail end because thats O(n)

queue from the tail dequeue from the head

# Trees

A linked list is a form of a tree that doesn't fork

left and right instead of next

Doesn't have to be binary, but if there are only two items it is binary

With a full tree an item either points to two nodes or zero nodes

Perfect tree means that every line with items is filled all the way across

Complete tree is still complete if line isn't filled

Top item is parent of two children, the two children are also siblings, never more than one parent of a node

A node with no children is a leaf node

## Binary Search Tree

with BST if child node added is great than parent it goes on right if less it goes on the left

follow up children is compared against parent as well, but also the existing child node.  If less than it goes on the left side of that child node.

When adding more always starts at the top and compare all the way down

Nodes can be expressed as 2 to the number of lines

the exponent represents the number of steps

Add Remove is O(log n)

non forking nodes is worst case scenario and is O(n)

technically big(O) of binary search tree is O(n)

We treat it as O(log n)

lookup and remove advantage BST because you have to iterate through everything for LL

For insert advantage LL/Array because since it doesn't make a diff if it is sorted you can just add it onto the end O(n)

giving up efficiency putting items into the tree to make it fast to look up and remove

We need something pointing to the top node of a BST so it doesn't get garbage collected

For BST that is root

# Hash Tables

Objects are built in Hash Tables in JSON

Consist of key value pairs

Only key gets run through the hash 

Given an address ie 2

Hashes are one way

run object through and get where it is stored in memory

cannot change value 2 and get it to produce string nails

Hashes are deterministic, next time you run nails it'll also produce two different

Collision: when hash choosing same number again

## Collision

When an item maps to the same spot in memory.

Multiple object arrays are stored within another array

Separate Chaining: putting multiples in same address space

Linear Probing: [Open Addressing] Another approach would be to go to next item and see if its open if there is already an item at the address space

Another way of doing separate chaining is hacing a linked list at each address and adding to the linked list if there is duplicates