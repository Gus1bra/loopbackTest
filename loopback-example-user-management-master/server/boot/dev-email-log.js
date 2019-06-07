'use strict';

module.exports = function devEmailLog(app) {

  const ENV = app.get('env');

  if ('development' === ENV) {
    app.models.Email.send = function sendEmailStub(options, callback) {
      console.log('Send e-mail:', options);
      return new Promise(function(resolve, reject) {
        const done = function(err, result) {
          if (err) {
            if (callback) {
              callback(err);
            }
            return reject(err);
          }
          if (callback) {
            callback();
          }
          return resolve(result);
        };
        done();
      });
    };
  }

};
