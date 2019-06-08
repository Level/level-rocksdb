require('level-packager/abstract/test')(require('tape'), require('./'), {
  // TODO: remove once Level/packager#87 lands
  skipDestroyTest: true
})
