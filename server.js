const { createServer } = require('node:http');//import thu vien
const hostname = '127.0.0.1';//localhost
const port = 3000;//cổng lắng nghe server
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  //xử lý phía backend để lấy data trả về client
  res.write('<p>Tao Hello World</p>');
  res.write('<br>');
  res.write('<h1>NoteJS-Bai Lab 2</h1>\n');
  res.write(`<h1>HTML5 - Nội dung 1</h1>
    <h2>HTML5 - Nội dung 2</h2>
    <p>HTML5 - Nội dung 3</p>`);
  
  res.end();
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});