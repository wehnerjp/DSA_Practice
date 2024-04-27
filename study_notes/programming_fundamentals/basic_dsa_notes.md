# JS DS&A Course Notes


O(log n)

Divide and conquer split check etc

Has to be sorted data

O(n log n)

Most efficient you can make a sorting algorithm unless your sorting only numbers

## Different Terms for Inputs - gotcha interview question

If you pass in (a, b) to two separate for loops in a function, you can’t give big o notation of O(n) because you can’t say a and b are = n so it is O(a + b) simplified

If they were nested it would be O(a * b)




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

