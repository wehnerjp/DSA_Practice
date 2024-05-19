# Breadth First Search

* Goes Broad (to neighbors) before going deep (to children)
* Need flag or some way of preventing infinite loop
* Iterative using queue

* NextToVisit linked list, add source node to queue
* If NTV isn't empty, isn't destination, and isn't visited, remove from NTV, add to visited, and then add adjacent nodes to NTV queue