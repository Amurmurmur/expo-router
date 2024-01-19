// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')
const fs = require('fs')

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
})

// for some reason rnxkit is much more reliable at resolving
// const { makeMetroConfig } = require('@rnx-kit/metro-config')
// const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks')
// const config2 = makeMetroConfig({
//   projectRoot: __dirname,
//   resolver: {
//     resolveRequest: MetroSymlinksResolver(),
//   },
// })
// config.resolver.resolveRequest = config2.resolver.resolveRequest
// config.resolver.extraNodeModules = config2.resolver.extraNodeModules
// config.resolver.resolverMainFields = config2.resolver.resolverMainFields

// 2. Enable Tamagui
const { withTamagui } = require('@tamagui/metro-plugin')
module.exports = withTamagui(config, {
  components: ['tamagui'],
  config: './tamagui.config.ts',
  outputCSS: './tamagui.css',
})
