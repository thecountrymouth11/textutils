import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TEXT-UTILS" aboutText="About TEXT-UTILS" />
      <div className="container">
        <TextForm heading="Enter the text to analyze" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
