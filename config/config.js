'use strict';

const expressConfig = {
  apiPort: 3001,
  apiServer: 'localhost',
  port: 3001,
  server: 'localhost',
  ip: '127.0.0.1',
  protocol: 'http://'
}


const dbConfig = {
  mongodbUrl: 'mongodb://localhost/buymesomething'
}

const paypal = {
	production:'',
	sandbox:'AbPtU8dUVgwSPtT8F1in7UM5AAFMLQzPwWLRhcjPMM9JVj3tJF-l_J7isphrsS_aU8xjNdlTBScZvil2',

}

const defaults = {
  currency: 'EUR',
  total: 9.90
}

module.exports = {
  expressConfig: expressConfig,
  dbConfig: dbConfig,
  paypal:paypal,
  defaults:defaults
}