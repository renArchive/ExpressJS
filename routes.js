const fs = require('fs');

const requestHandler = (req, res) => {
  // Some of the more important properties in req
  //console.log(req.url, req.method, req.headers);

  const url = req.url;
  const method = req.method;
  
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Page Title</title></head>');
    res.write('<body><form action="/message" method="POST"><input name="testInput" type="text"><button type="submit">Send</button></input></form></body>');
    res.write('</html>');
    return res.end();
  }
  
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
  
      // Async write: Has a callback function to execute once the write is done
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
  
      // Sync write: Blocks execution until the write is done 
      // ** This can be a problem for huge files
      // fs.writeFileSync('message.txt', message);
      // res.statusCode = 302;
      // res.setHeader('Location', '/');
      // return res.end();
    });
  }
  
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Page Title</title></head>');
  res.write('<body><h1>Body content</h1></body>');
  res.write('</html>');
  res.end();

  // Exits event loop
  //process.exit()
};

module.exports = requestHandler;

// Export multiple things
// module.exports = {
//   handler: requestHandler,
//   someText: 'Constant text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Constant text';