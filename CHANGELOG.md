# Changelog

## [5.0.0] - 2021-09-12

_If you are upgrading: please see [`UPGRADING.md`](UPGRADING.md)._

### Changed

- **Breaking:** bump `rocksdb` from 4.x to [5.x](https://github.com/Level/rocksdb/releases/tag/v5.0.0) ([`a02f4b5`](https://github.com/Level/level-rocksdb/commit/a02f4b5)) (Vincent Weevers)
- **Breaking:** bump `level-packager` from 5.x to [6.x](https://github.com/Level/packager/releases/tag/v6.0.0) ([#73](https://github.com/Level/level-rocksdb/issues/73)) ([`a0b5ea6`](https://github.com/Level/level-rocksdb/commit/a0b5ea6)) (Vincent Weevers)

### Removed

- **Breaking:** drop Node.js 8 ([Level/community#98](https://github.com/Level/community/issues/98)) ([`ec94d45`](https://github.com/Level/level-rocksdb/commit/ec94d45)) (Vincent Weevers)
- Remove legacy range options from README ([Level/community#86](https://github.com/Level/community/issues/86)) ([`6d08202`](https://github.com/Level/level-rocksdb/commit/6d08202)) (Vincent Weevers).

## [4.0.0] - 2019-06-08

_If you are upgrading: please see [`UPGRADING.md`](UPGRADING.md)._

### Changed

- Upgrade `level-packager` from `^4.0.0` to `^5.0.1` ([`1033aa8`](https://github.com/Level/level-rocksdb/commit/1033aa8)) ([#59](https://github.com/Level/level-rocksdb/issues/59)) ([**@vweevers**](https://github.com/vweevers))
- Upgrade `rocksdb` from `^3.0.0` to `^4.0.0` ([`51dfde2`](https://github.com/Level/level-rocksdb/commit/51dfde2)) ([#59](https://github.com/Level/level-rocksdb/issues/59)) ([**@vweevers**](https://github.com/vweevers))
- Apply common project tweaks ([#54](https://github.com/Level/level-rocksdb/issues/54), [#55](https://github.com/Level/level-rocksdb/issues/55)) ([**@vweevers**](https://github.com/vweevers))
- Upgrade `standard` devDependency from `^11.0.1` to `^12.0.0` ([#42](https://github.com/Level/level-rocksdb/issues/42)) ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Added

- Add node 12 to Travis ([`8132936`](https://github.com/Level/level-rocksdb/commit/8132936)) ([#59](https://github.com/Level/level-rocksdb/issues/59)) ([**@vweevers**](https://github.com/vweevers))
- Add `nyc` and `coveralls` ([#41](https://github.com/Level/level-rocksdb/issues/41), [#56](https://github.com/Level/level-rocksdb/issues/56), [#57](https://github.com/Level/level-rocksdb/issues/57)) ([**@ralphtheninja**](https://github.com/ralphtheninja), [**@vweevers**](https://github.com/vweevers))
- Add `.npmignore` ([`10f0e72`](https://github.com/Level/level-rocksdb/commit/10f0e72)) ([**@vweevers**](https://github.com/vweevers))

### Removed

- Remove node 9 from Travis ([`9a83c55`](https://github.com/Level/level-rocksdb/commit/9a83c55)) ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Drop node &lt; 8.6.0 ([`cbe000a`](https://github.com/Level/level-rocksdb/commit/cbe000a)) ([#59](https://github.com/Level/level-rocksdb/issues/59)) ([**@vweevers**](https://github.com/vweevers))

### Fixed

- Fix Level badge ([`344a808`](https://github.com/Level/level-rocksdb/commit/344a808)) ([**@vweevers**](https://github.com/vweevers))
- Remove link to dead website ([`782ba8c`](https://github.com/Level/level-rocksdb/commit/782ba8c)) ([**@vweevers**](https://github.com/vweevers))

## [3.0.1] - 2018-06-24

### Changed

- Upgrade `level-packager` to `^4.0.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Use abstract tests from `level-packager` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Tweak copyright years for less maintenance ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Replace `LICENSE` with `LICENSE.md` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Switch to plain MIT license ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Add `CONTRIBUTORS.md` stub ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Removed

- Remove apt package from Travis ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Remove `contributors` from `package.json` ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [3.0.0] - 2018-05-24

_If you are upgrading: please see [`UPGRADING.md`](UPGRADING.md)._

### Changed

- Upgrade `rocksdb` to `^3.0.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Upgrade `level-packager` to `^3.0.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Added

- Add node 10 to Travis ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Add `standard` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Add `CHANGELOG.md` and `UPGRADING.md` ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Removed

- Remove node 4 from Travis ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [2.0.0] - 2018-04-17

_If you are upgrading: please see [`UPGRADING.md`](UPGRADING.md)._

### Changed

- Upgrade `rocksdb` to `^2.0.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Upgrade `level-packager` to `^2.0.0` ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Update README ([**@vweevers**](https://github.com/vweevers))

### Added

- Add Greenkeeper badge ([**@ralphtheninja**](https://github.com/ralphtheninja))
- Add node 9 to Travis ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Removed

- Remove node 7 from Travis ([**@ralphtheninja**](https://github.com/ralphtheninja))

### Fixed

- Fix oom problems on linux by limiting cores ([**@ralphtheninja**](https://github.com/ralphtheninja))

## [1.0.1] - 2017-07-01

### Changed

- Update links in README ([**@mcollina**](https://github.com/mcollina))

## [1.0.0] - 2017-07-01

_Technically not the first release. Earlier versions were published in 2013._

[5.0.0]: https://github.com/Level/level-rocksdb/releases/tag/v5.0.0

[4.0.0]: https://github.com/Level/level-rocksdb/releases/tag/v4.0.0

[3.0.1]: https://github.com/Level/level-rocksdb/releases/tag/v3.0.1

[3.0.0]: https://github.com/Level/level-rocksdb/releases/tag/v3.0.0

[2.0.0]: https://github.com/Level/level-rocksdb/releases/tag/v2.0.0

[1.0.1]: https://github.com/Level/level-rocksdb/releases/tag/v1.0.1

[1.0.0]: https://github.com/Level/level-rocksdb/releases/tag/v1.0.0
