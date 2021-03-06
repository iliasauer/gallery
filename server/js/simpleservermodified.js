// Generated by CoffeeScript 1.9.1
(function() {
  var fs, http, requestListenerImpl, server;

  http = require('http');

  fs = require('fs');

  requestListenerImpl = function(request, response) {
    return fs.readFile('simpleserver.js', 'utf8', function(error, data) {
      response.writeHead(200, {
        'content-type': 'text/plain'
      });
      if (error) {
        response.write('Could not find or open file for reading\n');
      } else {
        response.write(data);
      }
      return response.end();
    });
  };

  server = http.createServer(requestListenerImpl);

  server.listen(8124);

  console.log('Server running on 8124\n');

}).call(this);

//# sourceMappingURL=simpleservermodified.js.map
