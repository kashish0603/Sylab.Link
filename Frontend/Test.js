import React, {useState} from 'react';
import {useDropZone} from 'react-dropzone';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponse:""};
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }
    
   render() {
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>
            {this.state.apiResponse}
        </p>
      </header> */}
      <div className='navbar'>
        <nav>
          <ul className='logo-ul'>
            <li>
              <h1 className='logo-heading'>SYLAB.<span>LINK</span></h1>
            </li>
          </ul>
          <ul className='middle-ul'>
            <li>Home</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Terms</li>
          </ul>
          <ul className='button-ul'>
            <button className='login-button'>Login</button>
            <button className='sign-up-button'>Sign Up</button>
          </ul>
        </nav>

        <div className='upload-area'>
          
            <div className='upload-head'>
              <h1>Secure Cloud Storage and</h1>
              <h1>Communication</h1>
            </div>

            <div className='upload-area-main'>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drop files here</p>
              </div>
              <div>{images}</div>
            </div>

        </div>

      </div>
    </div>
  );
};

export default App;