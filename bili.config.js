module.exports = {
  input: 'src/index.js',
  output: {
    format: 'cjs,umd,esm',
    moduleName: 'VueSlotMachine',
    extractCSS: false,
    sourceMap: true,
  },
  plugins: {
    vue: true,
  },
};
