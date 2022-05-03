import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*">404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
