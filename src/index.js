const config = require('./config')
const schema = require('./schema')
const plugin = require('./plugin')

module.exports = {
  id: 'test',
  name: 'Sample Plugin',
  description: 'A sample plugin example',
  plugin,
  schema,
  config
}
