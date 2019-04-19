module.exports = {
  input: 'src/index.js',
  output: {
    format: 'cjs,umd,esm',
    moduleName: 'SlotMachine',
    extractCSS: false,
    sourceMap: true,
  },
  plugins: {
    vue: true,
  },
};
