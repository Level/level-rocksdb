# Upgrade Guide

This document describes breaking changes and how to upgrade. For a complete list of changes including minor and patch releases, please refer to the [changelog](CHANGELOG.md).

## v4

Upgraded to [`rocksdb@4.0.0`](https://github.com/Level/rocksdb/blob/master/UPGRADING.md#v4) and (through `level-packager@5`) [`levelup@4`](https://github.com/Level/levelup/blob/master/UPGRADING.md#v4) and [`encoding-down@6`](https://github.com/Level/encoding-down/blob/master/UPGRADING.md#v6). Please follow these links for more information. A quick summary: support of node &lt; 8.6.0 has been dropped, node 12 is now supported, range options (e.g. `gt`) are now serialized the same as keys, `{ gt: undefined }` is not the same as `{}`, nullish values are now rejected and streams are backed by [`readable-stream@3`](https://github.com/nodejs/readable-stream#version-3xx).

## v3

Dropped support for node 4. No other breaking changes.
