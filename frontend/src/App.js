import { useState } from "react";

import NavBar from "./components/NavBar";
import BackDrop from "./components/BackDrop";
import SideDrawer from "./components/SideDrawer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import "./assets/scss/global.scss";
import Footer from "./components/Footer";
function App() {
  const [sideToggle, setSideToggle] = useState(false)
  return (
    <Router>
      <NavBar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />

      <main>
        <Switch>
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>

      <Footer />

    </Router>
  );
}

export default App;
