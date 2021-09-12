# Upgrade Guide

This document describes breaking changes and how to upgrade. For a complete list of changes including minor and patch releases, please refer to the [changelog](CHANGELOG.md).

## 5.0.0

Legacy range options have been removed ([Level/community#86](https://github.com/Level/community/issues/86)). If you previously did:

```js
db.createReadStream({ start: 'a', end: 'z' })
```

An error would now be thrown and you must instead do:

```js
db.createReadStream({ gte: 'a', lte: 'z' })
```

The same applies to `db.iterator()`, `db.createKeyStream()` and `db.createValueStream()`.

A db created or opened with this release cannot be opened by earlier versions, because RocksDB has been upgraded to 6.17.3 (via `rocksdb` [5.0.0](https://github.com/Level/rocksdb/releases/tag/v5.0.0)) which effectively changes the default [`format_version`](https://rocksdb.org/blog/2019/03/08/format-version-4.html) from 2 to 4.

This release also drops support of Node.js 8 ([Level/community#98](https://github.com/Level/community/issues/98)).

## 4.0.0

Upgraded to [`rocksdb@4.0.0`](https://github.com/Level/rocksdb/blob/master/UPGRADING.md#v4) and (through `level-packager@5`) [`levelup@4`](https://github.com/Level/levelup/blob/master/UPGRADING.md#v4) and [`encoding-down@6`](https://github.com/Level/encoding-down/blob/master/UPGRADING.md#v6). Please follow these links for more information. A quick summary: support of node &lt; 8.6.0 has been dropped, node 12 is now supported, range options (e.g. `gt`) are now serialized the same as keys, `{ gt: undefined }` is not the same as `{}`, nullish values are now rejected and streams are backed by [`readable-stream@3`](https://github.com/nodejs/readable-stream#version-3xx).

## 3.0.0

Dropped support for node 4. No other breaking changes.
