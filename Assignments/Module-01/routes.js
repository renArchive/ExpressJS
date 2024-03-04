
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Welcome to Test Page</title></head>');
    res.write('<body><form action="/create-user" method="POST"><input name="username" type="text"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>')
    res.write('<ul><li>Edward Elric</li></ul>');
    res.write('<ul><li>Alphonse Elric</li></ul>');
    res.write('</body>')
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
  
      res.statusCode = 302;
      console.log('User created:', username);
      return res.end();
    });
  }

};

module.exports = requestHandler;