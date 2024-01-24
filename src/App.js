import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
//import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container my-3">
        <TextForm heading="Enter your text" />
        {/*<About/>*/}
      </div>
    </>
  );
}

export default App;
