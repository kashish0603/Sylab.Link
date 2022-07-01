# SYLAB.LINK :


## Problem Statement:
Before every exam, millions of students surf through google, trying to find relevant study materials and video links to prepare for their exams. This is an extremely time-consuming task, as the students have to check through millions of links trying to find the right one.
What if there was some kind of solution to help these troubled students? A place where they could get all the links compiled in one place, separated according to their topics?
<br>
### Solution: 
1. Upload image file in jpg or png format.<br>

2. Text extraction is done through Tesseract OCR software, and the output is stored as a string.<br>

3. The string is converted to a list, and topics are separated according to the modules.<br>

4. The topics are being called through a loop, and given as a query for Google and YouTube search.<br>

5. The top 2 links from both Google and YouTube searches are stored in a json file.<br>

6. Axios is used to fetch the data from the json file.<br>

7. The output is displayed on the website.
<br>
### Techstack:

●	Firebase - Database<br>
●	Node - Backend<br>
●	Express - nodejs framework.<br>
●	React - Javascript library for frontend<br>
●	Python: <br>
        ○   Pytesseract - text extraction from image.<br>
        ○   openCV - Image processing. <br>
        ○   Googlesearch  <br>
        ○   urllib.request.
<br>
<br>
 <img align="left" alt="HTML5" padding="8px" width="26px" src="https://create-react-app.dev/img/logo.svg" /><br>
<img align ="left" alt="Node" padding="8px" width="45px" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"/><br>
<img align="left" alt="Firebase" padding="8px" width="48px" src="https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-built_white.png"/><br>
<img align="left" alt="python" padding="8px" width="60px" src="https://1000logos.net/wp-content/uploads/2020/08/Python-Logo.png"/><br>
<img align="left" alt="express" padding="8px" width="48px" src="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/07/express-logo-528x240.png"/><br>
<br>
<br>

# Installing Dependencies:
## Node:
In a web browser, navigate to https://nodejs.org/en/download/. Click the Windows Installer button to download the latest default version. At the time this article was written, version 10.16.0-x64 was the latest version. The Node.js installer includes the NPM package manager. <br>

###### Launch the installer and finish the set up
### Verifying Installations
```sh
node -v
```
## React:
To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-react-app my-app
```


### npm

```sh
npm init react-app my-app
```

_`npm init <initializer>` is available in npm 6+_

### Yarn

```sh
yarn create react-app my-app
```
<br>

## Express:
Firstly, you have to install the express framework globally to create web application using Node terminal. Use the following command to install express framework globally.

Install the following dependencies
<br>
 ```sh
npm install -g express
```

<br>

 ```sh
npm install express save
```

<br>

 ```sh
npm install express save
```

<br>

 ```sh
npm install body-parser --save
```

<br>

 ```sh
npm install cookie-parser --save
```

<br>

 ```sh
npm install multer save
```
<br>

## Python libraries:
 
### Installing Tesseract:
 ```sh
pip install tesseract
```
<br>

### Installing Pytesseract:
 ```sh
pip install pytesseract
``` 
<br>

### Installing OpenCV:
 ```sh
pip install opencv-python
``` 
<br>

### Installing Searching Sources:
 ```sh
pip install google
``` 
<br>

 ```sh
pip install beautifulsoup4
``` 
<br>

 ```sh
pip install pywhatkit
``` 
