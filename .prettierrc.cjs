module.exports = {
  printWidth: 80, // 一行的字符数，如果超过会进行换行，默认为 80
  tabWidth: 2, // 一个 tab 代表几个空格数， 默认为 2 个
  useTabs: true, // 是否使用 tab 进行所经，默认为 false(标识用空格进行缩进)
  singleQuote: true, // 字符串是否使用单引号，默认为 false，即使用双引号
  semi: true, // 行尾是否使用分号，默认为 true
  trailingComma: 'es5', // 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现都好结尾。）可选值 "<none|es5|all>"，默认 none
  bracketSpacing: true, // 对象文字中的括号之家打印空格，默认为 true， 效果： { a: 1 }
  quoteProps: 'as-needed', // 给对象里的属性名是否要加上引号，默认为 as-needed，即根据需要决定，如果不加引号会报错则加，否则不加
  jsxSingleQuote: false, // jsx 不适用单引号，而使用双引号
  jsxBracketSameLine: false, // jsx 标签的反尖括号需要换行
  arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号 <always 默认 | avoid 省略括号>
  rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
  rangeEnd: Infinity,
  requirePragma: false, // 不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  proseWrap: 'preserve', // 使用默认的折行标准 <always | never | preserve>
  htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行 
  vueIndentScriptAndStyle: false, // vue 文件脚本和样式标签缩进
  // 在 window 操作系统中换行符通常是回车 (CR) 加 换行分隔符 (LF)，也就是回车换行 (CRLF)，
  // 然后在 Linux 和 Unix 中只使用简单的换行分隔符 (LF)。
  // 对应的控制字符为 "\n" (LF) 和 "\r\n" (CRLF)。auto意味保持现有的行尾
  // 换行符使用 lf 结尾是 可选值 <auto | lf | crlf | cr>
  endOfLine: 'auto',
}