const PROXY_CONFIG = {
  '/api/*': {
    'target': 'https://jsonplaceholder.typicode.com/',
    'secure': false,
    'logLevel': 'debug',
    'changeOrigin': true,
    "pathRewrite": {
      "api/": ""
    }
  }
};

module.exports = PROXY_CONFIG;
