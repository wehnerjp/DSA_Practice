JS DS&A Course Notes

Linked Lists, Binary tree, array = data structure

Big O = way to mathematically determine program efficiency

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


Big O of Arrays

Push and pop are O(1) operations, because there is no reindexing

Shift Unshift are O(n) where in is the number of items in the array because of reindexing

Search by value O(n) search by index O(1)

Array is great if you need to access things by index

Not great if you want to add and remove a lot of items at the beginning

O(n^2) = Loop within a Loop

O(n) = Proportional

O(log n) = Divide and Conquer

O(1) = Constant



Pointers

Setting num 1 to num 2 is temporary

Object with a value is a ref point

If a var is assigned off one obj to another the other one still takes up space in memory, cleaned up with GC


Linked list compared to arrays

Arrays have indexes not LL

Arrays are in contiguous places in memory LL can be all over

Head points to first items tail is last they all point to the next last points to null

Null terminated list

LL node is the value and the pointer, obj with value, next

Set of nested objects

Every method creates a new node for linked lists create a separate class to create nodes
