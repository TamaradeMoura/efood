import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Global } from "./styles";
import Categories from "./pages/categories";
import Cart from "./components/Cart";
import { store } from "./components/store";



function App() {
  return (
   <Provider store={store}>
     <BrowserRouter>
    <Global />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Categories/:id" element={<Categories />} />
    </Routes>
    <Footer />
    <Cart />
    </BrowserRouter>
   </Provider>
  );
}

export default App;
