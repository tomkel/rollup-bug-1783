import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'main.js',
  output: {
    file: 'bundle.js',
    format: 'iife'
  },
  name: 'MyModule',
  plugins: [resolve()],
};
