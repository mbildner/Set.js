Set.js
======

Toy implementation of sets in javascript

Use in browser by including:
`<script src="Set.js"></script>`

Or in Node:
`var Set = require('./Set.js');`


For now, all values are returned as `String`s no matter how they are passed in.


Use
===

Creating a set
--------------

```JavaScript

var furnitureSet = new Set(['chair', 'couch', 'table', 'table', 'table']);

var foodSet = new Set(['fish', 'chicken', 'carrot', 'carrot', 'carrot']);

```
Get the values back out
-----------------------

```JavaScript

// set members are returned in an arbitrary order,
// do not expect them to come out in the order you put them in

console.log(furnitureSet.members()); // 'chair', 'couch', 'table'

console.log(foodSet.members()); // 'fish', 'chicken', 'carrot'

```

Get the set length
------------------

```JavaScript

var length = furnitureSet.length();
console.log(length); // 3

```


Add a member
------------

```JavaScript

furnitureSet.add('door');
foodSet.add('broken glass');

console.log(furnitureSet.members()); // 'chair', 'couch', 'table', 'door'
console.log(foodSet.members()); // 'fish', 'chicken', 'carrot', 'broken glass'

```

Remove a member
---------------

```JavaScript

foodSet.remove('broken glass');
console.log(foodSet.members()); // 'fish', 'chicken', 'carrot'


```

Get a random member
-------------------

```JavaScript

var randomFood = foodSet.random();

console.log(randomFood); // 'chicken'
console.log(foodSet.members()); // 'fish', 'chicken', 'carrot'

```

Pop a random member
-------------------

```JavaScript

var randomFood = foodSet.random();

console.log(randomFood); // 'chicken'
console.log(foodSet.members()); // 'fish', 'carrot'

```

Get the intersection with another set
-------------------------------------

```JavaScript

furnitureSet.add('carrot');

var foodAndFurnitureSet = foodSet.intersect(furnitureSet);
console.log(foodAndFurnitureSet.members()); // 'carrot'

```

Get the union with another set
------------------------------

```JavaScript

var foodOrFurnitureSet = foodSet.union(furnitureSet);
console.log(foodOrFurnitureSet.members()); // 'chair', 'couch', 'table', 'door', 'fish', 'chicken', 'carrot'

```


Test set for item membership
----------------------------

```JavaScript

var doorIsFood = foodSet.isMember('door');
console.log(doorIsFood); // false

var fishIsFood = foodSet.isMember('fish');
console.log(fishIsFood); // true

```
