import React from "react";
import Home from "./views/Home";
import CartView from "./views/CartView";
import LogIn from "./views/LogIn";
import Register from "./views/Register";
import About from "./views/About";
import Contact from "./views/Contact";
import ProductDetail from "./views/ProductDetail";
import NavBar from "./components/Navbar";
import Default from "./views/Default";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/CartView" component={CartView} />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/Register" component={Register} />
        <Route path="/ProductDetail/:id" component={ProductDetail} />
        <Route component={Default} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
