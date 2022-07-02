const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")
const urlToImage = require('url-to-image');
const fs = require('fs'),
    request = require('request');

// npm init
// npm i express cors nodemon
// they add a handy req.body object to our req,
// containing a Javascript
//  object representing the payload sent with the request

const download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
      console.log('content-type:', res.headers['content-type']);
      console.log('content-length:', res.headers['content-length']);
  
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
  };

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.post("/post_name", async (req, res) => {
	let { imageUrls } = req.body
	console.log(imageUrls)
    const length = imageUrls.length
    console.log(length)

    download(imageUrls[length-1], "./uploads/submitted.png", function(){
        console.log('done');
    });

    // urlToImage(imageUrls[0], "./uploads/submitted.png", options)
    // .then(function() {
    //     // do stuff with google.png
    // })
    // .catch(function(err) {
    //     console.error(err);
    // });
})

app.get("/", cors(), async (req, res) => {
	res.send("This is working fine")
})
const { spawn } = require('child_process')
const childPython = spawn('python', ['integration.py']);

childPython.stdout.on('data', (data) => {
    app.get("/home", cors(), async (req, res) => {
        res.send(`${data}`)
    })
})

childPython.stderr.on('data', (data) => {
    app.get("/home", cors(), async (req, res) => {
        res.send(`${data}`)
    })
});

// app.post("/post_name", async (req, res) => {
// 	let { name } = req.body
// 	console.log(name)
//   res.send("Hello")
// })

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})