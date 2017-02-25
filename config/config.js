'use strict';

const expressConfig = {
  apiPort: 80,
  apiServer: 'http://ec2-34-250-193-115.eu-west-1.compute.amazonaws.com/',
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