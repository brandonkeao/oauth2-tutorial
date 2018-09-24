var request = require('request');

var getToken = () => {
  return new Promise((resolve, reject) => {
    request({
      method: 'POST',
      url: 'https://apis.burning-glass.com/auth/realms/BGT/protocol/openid-connect/token/',
      form: {
        grant_type: 'password',
        client_id: 'UnifiedApi',
        username: 'bkeao@pairin.com',
        password: 'denverL3*lan*890'
      },
      json: true
    }, (error, response, body) => {
      if(error) {
        reject(`Unable to get token: ${error}`);
      }
      try {
        resolve(body.access_token);
      } catch (error) {
        reject(`Unable to get token: ${error}`);
      }
    });
  });
};

module.exports = {
  getToken
}
