# Changelog

_**If you are upgrading:** please see [`UPGRADING.md`](UPGRADING.md)._

## [Unreleased][unreleased]

## [4.0.0] - 2019-06-08

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

## 1.0.0 - 2017-07-01

**Historical Note** Technically not the first release. Earlier versions were published in 2013.

[unreleased]: https://github.com/level/level-rocksdb/compare/v4.0.0...HEAD

[4.0.0]: https://github.com/level/level-rocksdb/compare/v3.0.1...v4.0.0

[3.0.1]: https://github.com/level/level-rocksdb/compare/v3.0.0...v3.0.1

[3.0.0]: https://github.com/level/level-rocksdb/compare/v2.0.0...v3.0.0

[2.0.0]: https://github.com/level/level-rocksdb/compare/v1.0.1...v2.0.0

[1.0.1]: https://github.com/level/level-rocksdb/compare/v1.0.0...v1.0.1
