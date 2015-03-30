fs = require 'fs'

main = (config) ->
  fs.readFileSync config, 'utf-8'

str = main '../src/styles/css/index-styles.css.map'
console.log str.replace 'src/styles/less/', ''
console.log 'chk'