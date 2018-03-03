// @remove-on-eject-begin
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
'use strict';

const babelJest = require('babel-jest');

const getClientEnvironment = require('../env');
const getAdvancedConfiguration = require('../advanced-react-scripts/config');

const publicUrl = '';
const env = getClientEnvironment(publicUrl);
const advancedConfiguration = getAdvancedConfiguration(env, true);

module.exports = babelJest.createTransformer({
  presets: [
    require.resolve('babel-preset-react-app-fresh'),
    ...advancedConfiguration.babelPresets,
  ],
  plugins: [
    ...advancedConfiguration.babelPlugins,
  ],
  // @remove-on-eject-begin
  babelrc: false,
  // @remove-on-eject-end
});
