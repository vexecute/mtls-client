const https = require('https');
const fs = require('fs');

const options = {
  hostname: '192.168.1.4',
  port: 4444,
  path: '/',
  method: 'GET',
  key: fs.readFileSync('./client.key'),
  cert: fs.readFileSync('./client.crt'), 
  ca: [fs.readFileSync('./server.crt')], 
  rejectUnauthorized: false, 
  passphrase: 'hello', 
};

const req = https.request(options, (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.end();
