# Weak Isolation Levels

read skew: nonrepeatable read, when you read and the impact of a write is reflected in one value of the database but not another.  Ie. transfering between checking and savings.  May reflect the withdrawal from checking but not show the impact on savings immediately.

Reloads can handle temporary inconsistencies, but some things can't:
When a process take hours, if you let writes continue only part of the writes will be reflected.

* Backups
* Large queries

## Snapshot isolation

Solution to inconsistencies during long process.

Take a snapshot of db at moment when transaction starts. No modification occurs past that point.  Keeps data consistent.

key principle: readers never block writers and writers never block readers.

taking snapshot allows writes to continue without read locks being necessary on primary db

known as MVCC (Multi-Version Concurrency Control)

### Visibility rules

each row has a transactionID and at the start of a new transaction it make a list of ongoing transactions and ignores them.
any writes with a later transaction id are ignored.  any aborted transaction writes are ignored.

apply for creation and deletion

doesn't actually replicate new db just reads selectively from db by filtering values

Snapshot isolation also called serializable and repeatable read

## Lost Updates
If two transactions reads a value, modify, then write it back, then one of the modified vals will be lost

would need to check that the modified val hadn't been changed since the read and place a lock on it

### Solutions

#### Atomic write ops
remove need to read-modify-write on app side. Usually best solution if possible. 

Usually implemented by obtaining lock on object no other transaction can read until it is applied - cursor stabliity.

Otherwise, make is single threaded only execute one at a time.

#### Explicit locking

Application to lock objects to be updated.  App performs read modify write and another tranaction has to wait until finished

### Automatically detecting lost updates

Alternatively, can allow parallel execution and detect lost update then abort transaction and force retry

Advantage: 
* DB can perform this check efficiently in conjunction with snapshot isolation.  
* Doesn't require app code to use special db features.  Abstracts better

#### Compare and set

Check if value changed since first read only write if it hasn't, otherwise recalc

### Conflict resolution and replication

lock or compare and set don't apply to replicated with multi leader or leaderless because they assume single up to date copy of data and when data could be mdified on diff node.

common approach is to resolve conflicts using app code.  atomic ops work well in commutative contexts, but last write wins prone to lost updates for non incrementing values.  Still default many dbs

## Write Skew and Phantoms

Write skew: two transactions check a requirement (like on call minimum is met) if it is, then allow a write.  If both check a snapshot and then write, then the requirement may no longer be met. Generalization of lost update prob.

Common example:
meeting room booking
multiplayer game - lock prevents same player modified same time but not moving to same position at same time.  
Claiming a username
Preventing double spending

phantom - write in one transaction changes the result of another transaction. - no object to attach locks

### Solutions

Create all permutations ahead of time - all days and timeslots are rows.  (materialize it)

## Serializability

isolation levels inconsistent hard to understand

difficult to tell if safe to run

no good tools to detect race conditions

Solution: Serializable isolation

Strongest isolation level

### actual serial execution

Remove concurrency entirely - single thread it

multi threaded concurrency no longer essential for good performance:
* ram got cheaper - can keep everything in mem
* OLTP transactions usually short.  Long running analytic queries can be run on snapshot outside of serial execution looop

make transactions smaller and synchronous. 

No multi statement transactions - instead app submit entire transaction code ahead of time called stored procedure

stored procedure can execute bery fast in memeory 

modern DBs use general purpose programming languages for stored procedures

stored procedures for replication:  Deterministic

badly written stored procedure cause more trouble than app code because run so many more times

Scale to multiple CPU cores via partition

### Summary:

Serial execution viable within certain constraints:

* every transaction needs to be small and fast
* active dataset must fit in memory
* write throughput must be low enough to be handled by one cpu core
* cross partition transactions are possible but hard limit to extent can be used

## Two-Phase Locking

Long time only algorithm for serializability

Anyone can read, but if anyone wants to write exclusive lock on it.  Writers block readers

Deadlock - Many locks in use transactions often stuck waiting for a lock release and vice versa.  Db has to abort one transaction so other can make progress

Bad performance:  Lock managing overhead and reduced concurrency, high latency


Must prevent phantoms

predicate locks - lock on a condition rather than a specific row; don't perform well

index-range locking: approximation of predicate locks - more widely used- not as precise

## Serializable Snapshot Isolation

Newly created, full serializability - small performance penalty

Two phase locking is pessimistic concurrency.  Anything might go wrong then wait

SSI is optimistic - allow transactions to continue - check if anything bad happens after - if it has then retry it

On top of snapshot isolation - SSI adds an algorithm for detecting serialization conflicts among writes and determining which transactions to abort.

NOt limited to throughput of single core

doesnt need to block waiting for locks held by another transaction

rate of aborts significantly affects overall performance

## Summary

Transactions are an abstraction layer that allows app to pretend concurrency probs don't exist.  Reduce large class of errors to transaciton abort