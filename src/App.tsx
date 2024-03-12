import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Global } from "./styles";



function App() {
  return (
    <BrowserRouter>
    <Global />
    <Home />
    <Footer />
    </BrowserRouter>
  );
}

export default App;
