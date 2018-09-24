var token_request = require('./auth/token_request');

token_request.getToken().then((token) => {
  console.log(`GOT TOKEN: /n/n${token}`);
}, (errorMessage) => {
  console.log(errorMessage);
});
