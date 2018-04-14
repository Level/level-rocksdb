# level-rocksdb

> Fast & simple storage. A Node.js-style RocksDB wrapper.

[![level badge][level-badge]](https://github.com/level/awesome)
[![npm](https://img.shields.io/npm/v/level-rocksdb.svg)](https://www.npmjs.com/package/level-rocksdb)
![Node version](https://img.shields.io/node/v/level-rocksdb.svg)
[![Build Status](https://secure.travis-ci.org/Level/level-rocksdb.svg)](http://travis-ci.org/Level/level-rocksdb)
[![dependencies](https://david-dm.org/Level/level-rocksdb.svg)](https://david-dm.org/level/level-rocksdb)
[![npm](https://img.shields.io/npm/dm/level-rocksdb.svg)](https://www.npmjs.com/package/level-rocksdb)

A convenience package that:

* exports a function that returns a [`levelup instance`](https://github.com/level/levelup#ctor) when invoked
* bundles the current release of [`levelup`][levelup] and [`rocksdb`][rocksdb]
* leverages encodings using [`encoding-down`][encoding-down]

Use this package to avoid having to explicitly install `rocksdb` when you want to use `rocksdb` with `levelup`.

## Usage

```js
var level = require('level-rocksdb')

// 1) Create our database, supply location and options.
//    This will create or open the underlying RocksDB store.
var db = level('./mydb')

// 2) Put a key & value
db.put('name', 'Level', function (err) {
  if (err) return console.log('Ooops!', err) // some kind of I/O error

  // 3) Fetch by key
  db.get('name', function (err, value) {
    if (err) return console.log('Ooops!', err) // likely the key was not found

    // Ta da!
    console.log('name=' + value)
  })
})
```

See **[LevelUP](https://github.com/level/levelup)** and **[RocksDB](https://github.com/level/rocksdb)** for more details.

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

[level-badge]: http://leveldb.org/img/badge.svg
[levelup]: https://github.com/level/levelup
[rocksdb]: https://github.com/level/rocksdb
[encoding-down]: https://github.com/level/encoding-down
