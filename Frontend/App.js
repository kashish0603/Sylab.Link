import Home from "./Components/Home.js";
import FileUploader from "./Components/FileUploader.js";
import Details from "./Components/Details.js"
// import SignIn from "./Components/signinpage.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/FileUploader" element={<FileUploader />} />
          <Route path="/Details" element={<Details />} />
          {/* <Route path="/SignInPage" element={<SignIn />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;