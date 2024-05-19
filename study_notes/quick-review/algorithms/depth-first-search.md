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
