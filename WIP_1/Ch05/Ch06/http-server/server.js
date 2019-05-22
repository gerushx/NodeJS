//include the http package
//makes all the APIs available to the http variable
const http = require('http');

//hostname has default of localhost


const server = http.createServer();

//this is what happens when you pass the handler directly
// in to createServer
server.on('request', (request, response) => {
  response.end('Hello Planet!');
});


//start server and listen on port, hostname(optional),
//it runs until ended. Ctrl+C or Ctrl+break 
server.listen(3131, (err) => {  
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`Server is listening on 3131`);
});