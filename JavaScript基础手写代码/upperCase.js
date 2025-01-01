/**
 * 将下划线命名转换为驼峰命名
 * @param {string} str - 下划线命名的字符串
 * @returns {string} - 转换后的驼峰命名字符串
 */
function toCamelCase(str) {
  return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}

// 示例用法
console.log(toCamelCase("hello_world")); // 输出: "helloWorld"
console.log(toCamelCase("convert_to_camel_case")); // 输出: "convertToCamelCase"

str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
