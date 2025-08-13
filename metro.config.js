const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const config = getDefaultConfig(__dirname)

// alias resolution for web builds
config.resolver = {
  ...config.resolver,
  alias: {
    '@': path.resolve(__dirname, '.'),
  },
  platforms: ['ios', 'android', 'native', 'web'],
};
 
module.exports = withNativeWind(config, { input: './global.css' })