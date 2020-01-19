// const http = require('http');
const fs = require('fs');
// const url = require('url');

// const mimeTypes = {
//   '.html': 'text/html',
//   '.js': 'text/javascript',
//   '.css': 'text/css',
//   '.ico': 'image/x-icon',
//   '.png': 'image/png',
//   '.jpg': 'image/jpeg',
//   '.gif': 'image/gif',
//   '.svg': 'image/svg+xml',
//   '.json': 'application/json',
//   '.woff': 'font/woff',
//   '.woff2': 'font/woff2'
// }

// const server = http.createServer();

// server.on('request', (req, res) => {
//   console.log('req > ', req);

//   const parsedUrl = new URL(req.url, 'https://127.0.0.1:5000/')

//   console.log('parsedUrl > ', parsedUrl);
  
//   let pathName = parsedUrl.pathname;

//   console.log('pathName > ', pathName);
  
//   let ext = path.extname(pathName);

//   console.log('ext > ', ext);
  
// })


// app.use((req, res, next) => {
//     let now = new Date().toString();
//     let log = `${now}: ${req.method} ${req.url}`;
//     console.log(log);
//     fs.appendFile("server.log", log + "\n", (err) => {
//         if (err) {
//             console.log("Unable to append to server.log");
//         }
//     });
//     next();
// });
// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });
app.use(express.static(__dirname + '/public'));

// hbs.registerHelper('getCurrentYear', () => {
//     return new Date().getFullYear();
// });
// hbs.registerHelper('screamIt', (text) => {
//     return text.toUpperCase();
// });

// app.get("/", (req, res) => {
//     res.render('home.hbs', {
//         pageTitle: "Home Page",
//         welcomeMsg: "Welcome to the NodeJS web-site!"
//     });
// });

// app.get("/about", (req, res) => {
//     res.render('about.hbs', {
//         pageTitle: "About Page"
//     });
// });
app.post("/save-buy", (req, res) => {

  const buy = req.body;

  console.log("<save-buy req.body>", buy);

  fs.appendFile("./data/buys.json", buy, (err) => {
      if (err) {
          console.log("Unable to append to notes.json");
      }
  });

  res.send(buy);
});
app.get("/bad", (req, res) => {
    res.send({
        errorMessage: "Unable to fullfill the request."
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});