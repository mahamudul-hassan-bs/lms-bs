import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Directory from "./components/Directory";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Heading />
      <Directory />
      {/* <LandingPage /> */}
      <Home />
      <Footer />
    </>
  );
}

export default App;
