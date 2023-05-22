const { environment } = require('@rails/webpacker')
const jquery = require('./plugins/jquery')
const customConfig = require('./custom')

environment.config.merge(customConfig)
environment.plugins.prepend('jquery', jquery)
module.exports = environment
