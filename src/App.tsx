import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Global } from "./styles";
import Categories from "./pages/Categories";



function App() {
  return (
    <BrowserRouter>
    <Global />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
