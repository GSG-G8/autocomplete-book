const path = require('path');
const fs = require('fs');
const querystring = require('querystring');

const extention = {
  html: 'text/html',
  css: 'text/css',
  jpg: 'image/jpeg',
  js: 'text/javascript',
  png: 'image/png',
};


const message = 'Error On The Server';
const router = (request, response) => {
  const { url } = request;
  if (url === '/') {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (error, file) => {
      if (error) {
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end(message);
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(file);
      }
    });
  } else if (url.includes('public')) {
    const ext = url.split('.')[1];
    const fileName = url.split('/');
    const filePath = path.join(__dirname, '..', ...fileName);
    fs.readFile(filePath, (error, file) => {
      if (error) {
        response.writeHead(500, { 'Content-Type': extention.html });
        response.end(message);
      } else {
        response.writeHead(200, { 'Content-Type': extention[ext] });
        response.end(file);
      }
    });
  } else if (url === '/books') {
    let allTheData = '';
    request.on('data', (chunkOfData) => {
      allTheData += chunkOfData;
    });

    request.on('end', () => {
      const changedData = querystring.parse(allTheData);
      console.log(changedData);
      response.writeHead(308, { Location: '/' });
      response.end();
    });
  }
  response.end();
};

module.exports = router;
