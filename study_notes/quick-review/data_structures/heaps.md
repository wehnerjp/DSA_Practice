# Heap

A complete binary tree that stores the min or max in root node

Insertion: Next empty spot top to bottom left to right

Post insert, element bubbles up to right spot

When removing root, swap with last element added, then bubble down

Can use an array to store values

Simple equation can map to left child (index x 2+1),
right child (index x 2+2), or parent ((index - 1)/2)

