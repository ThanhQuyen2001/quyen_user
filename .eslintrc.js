module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: { 'prefer-const': 0, 'object-literal-shorthand': 0, "object-shorthand": 0, 'vue/multi-word-component-names': 0, 'vue/first-attribute-linebreak': 0, 'vue/attributes-order': 0 },
}
