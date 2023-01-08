const http = require('http');

const server = http.createServer((request, response) => {
  console.log('New connection')
  response.end('Hello connection')
});

const PORT = process.env.PORT || 8080
server.listen(PORT , ()=> console.log('listening'))
