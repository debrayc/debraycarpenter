
let path = require('path');
let express = require('express');

let app = express();
var staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));

app.get('/', (req, res) => {
  res.send('index.html')
})

app.get('/blog', (req, res) => {
  res.sendFile(staticPath + '/blog.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(staticPath + '/contact.html')
})

app.get('http://ifaacademy.eu/wp-content/uploads/2015/12/linkedin-logo-600x612.png', (reg, res) => {
  res.sendFile('http://ifaacademy.eu/wp-content/uploads/2015/12/linkedin-logo-600x612.png')
})

app.listen(3000, function() {
  console.log();
});
