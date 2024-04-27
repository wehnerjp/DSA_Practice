
# Hashtables (Objects)

For any problem, have Hashtables at the top of your mind when exploring technique to solve the problem

Only key gets run through the hash 

Given an address ie 2

Hashes are one way

run object through and get where it is stored in memory

cannot change value 2 and get it to produce string nails

Hashes are deterministic, next time you run nails it'll also produce two different

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
  
## Basics

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

## Collisions

When an item maps to the same spot in memory. (when hash chooses the same number again)

### Solutions

Multiple object arrays are stored within another array

Chaining

* When there is a collision, store them in a linked list
* The most common solution

With a chaining solution you have to run through all the values in the linked list and pull out the value for the corresponding key

With a chaining linked list you now not only include the object, but also the key

    Separate Chaining: putting multiples in same address space

    Linear Probing: [Open Addressing] Another approach would be to go to next item and see if its open if there is already an item at the address space

Another way of doing separate chaining is hacing a linked list at each address and adding to the linked list if there is duplicates

## Implementation using only arrays
