http = require 'http'
fs = require 'fs'


requestListenerImpl = (request, response) ->
  fs.readFile 'simpleserver.js', 'utf8', (error, data) ->
    response.writeHead 200, {'content-type': 'text/plain'}
    if error
      response.write('Could not find or open file for reading\n')
    else
      response.write(data)
    response.end()

server = http.createServer requestListenerImpl
server.listen 8124

console.log 'Server running on 8124\n'