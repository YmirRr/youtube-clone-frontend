module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'symbol-description': 'off', // Symbol 类型的数据在声明时是否必须有描述
    '@typescript-eslint/no-explicit-any': 'off', // any 类型变量需要明确指定类型
    'vue/multi-word-component-names': 'off', // 组件名称能否使用单字符
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
