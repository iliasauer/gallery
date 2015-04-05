# module loading
http = require 'http'

requestListenerImpl = (serverRequest, serverResponse) ->
  # content header, 200 - status code, {} - http header object (content-length, content-type, connection, accept...)
  serverResponse.writeHead 200, {'content-type': 'text/plain'}

  serverResponse.write 'Hello, Ilia!\n'

  # data transmission ending
  serverResponse.end()

# server creating
simpleServer = http.createServer requestListenerImpl

simpleServer.listen 8124

console.log 'Server running on 8124'


