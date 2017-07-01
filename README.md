level-rocksdb
=============

<img alt="LevelDB Logo" height="100" src="http://leveldb.org/img/logo.svg">

**Fast & simple storage - a Node.js-style RocksDB wrapper**

[![NPM](https://nodei.co/npm/level-rocksdb.svg)](https://nodei.co/npm/level-rocksdb/)

[![Build Status](https://secure.travis-ci.org/level/level-rocksdb.svg)](http://travis-ci.org/level/level-rocksdb)

This is a convenience package that bundles the current release of **[LevelUP](https://github.com/Level/levelup)** and **[RocksDB](https://github.com/Level/rocksdb)** and exposes LevelUP on its export.

Use this package to avoid having to explicitly install RocksDB when you want to use RocksDB with LevelUP.

```js
var level = require('level-rocksdb')

// 1) Create our database, supply location and options.
//    This will create or open the underlying LevelDB store.
var db = level('./mydb')

// 2) put a key & value
db.put('name', 'Level', function (err) {
  if (err) return console.log('Ooops!', err) // some kind of I/O error

  // 3) fetch by key
  db.get('name', function (err, value) {
    if (err) return console.log('Ooops!', err) // likely the key was not found

    // ta da!
    console.log('name=' + value)
  })
})
```

See **[LevelUP](https://github.com/rvagg/node-levelup)** and **[RocksDB](https://github.com/rvagg/node-leveldown/tree/rocksdb)** for more details.

<a name="contributing"></a>
Contributing
------------

**level-rocksdb** is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [CONTRIBUTING.md](https://github.com/Level/level/blob/master/CONTRIBUTING.md) file for more details.

<a name="license"></a>
License &amp; Copyright
-------------------

Copyright (c) 2012-2017 **Level** [contributors](https://github.com/level/community#contributors).

Level is licensed under the MIT license. All rights not explicitly granted in the MIT license are reserved. See the included `LICENSE.md` file for more details.
