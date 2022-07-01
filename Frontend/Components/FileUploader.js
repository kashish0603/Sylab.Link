import React, { useState, useEffect } from "react"
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";
// import {firebase} from "./firebase";
import { storage } from "./firebase";
import { v4 } from "uuid";
import "./FileUploader.css"
import cloudimg from "../Images/imagecloud.png"
import progress from "../Images/Process-pana.png"

function App() {
  const [imageUpload, setImageupload] = useState(null)
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");


  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, [])  

  // const signInWithFirebase = () => {
  //   const google_provider = new firebase.auth.GoogleAuthProvider();
  //   firebase.auth().signInWithPopup(google_provider)
  //   .then((re) => {
  //     console.log(re);
  //   })
  //   .catch((err)=>{
  //       console.log(err);
  //   })
  // }

  return (
    <div className="App">
    <div className="App">
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
            {/* <button className='sign-up-button' onClick={signInWithFirebase}>Sign In</button> */}
          </ul>
        </nav>

        <div className='upload-area'>
          
            <div className='upload-head'>
              <div className="side-images">
                <img src={cloudimg} alt="cloud-upload" />
              </div>
              <div className="upload-area-heading">
                <h1>Find <span>Links</span> and relevant <br></br><span>Articles</span></h1>
              </div>
              <div className="endside-images">
                <img src={progress} alt="cloud-upload" />
              </div>
            </div>

            <div className='upload-area-main'>
              <div className = 'upload-main-div'>
              <input className="file-upload-tag" type="file" onChange = {(event) => {
                  setImageupload(event.target.files[0])
                }} />
              </div>
            </div>
            <div className="uploaded-images"></div>
        </div>
      </div>
    </div>

    <div className="button-classname">
    <button className='sign-up-button' onClick={uploadFile}>Submit</button>
    </div>

    {/* <div className="image-display">
      <div className="image-mapped">
        <h1>Image Uploaded</h1>
      </div>
      <div className="links-div">
        <div className="video-links">
            <h1>Video Links</h1>
            <p>Youtube.com</p>
        </div>
        <div className="article-links">
            <h1>Article Links</h1>
            <p>geeksforgeek.com</p>
        </div>
      </div>
    </div> */}

    <div className="table-div">
      <table>
        <tr>
          <th>Image Uploaded</th>
          <th>Video Links</th>
          <th>Article Links</th>
        </tr>
        {imageUrls.map((url) => {
            return(
        <tr className="mapped-tr">
          <td className="image-td">
              <div>
                <img src={url} alt = "hello" />
                {/* <img src="https://i.ytimg.com/an_webp/vJEO57B05Sg/mqdefault_6s.webp?du=3000&sqp=CMiM75UG&rs=AOn4CLCnV2DYDC5btmKKzGZ-J2r4VVMGaA" alt="hehhe" /> */}
              </div>
          </td>
          <td className="video-td">
            <p>Youtube.com</p>
          </td>
          <td className="article-td">
            Geeksforgeeks.com
          </td>
        </tr>
            );
          })}
      </table>
    </div>

  </div>

  )
}

export default App;