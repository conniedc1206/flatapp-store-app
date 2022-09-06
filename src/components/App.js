import { Route, Switch } from "react-router-dom";
import About from "./About";
import Seller from "./Seller";
import Login from "./Login";
import NavBar from "./NavBar";
import Blogs from "./Blogs"
import Cart from "./Cart"
import MainContainer from "./MainContainer";
import { useState } from "react";
import ItemDetails from "./ItemDetails";

function App() {
  const [apps, setApps] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);
  const [cartApps, setCartApps] = useState([])

  function handleSelectedApp(newSelectedAppState) {
    setSelectedApp(newSelectedAppState);
  }

  const handleAddToCart = (appToAdd) => {
    //check if it's not in cart already
    //update cartApps state
    const isInCart = cartApps.some(app => app.id === appToAdd.id);
    if (!isInCart) {
      setCartApps(currentCart => [...currentCart, appToAdd]);
    }
  }

  function handleRemoveFromCart(appToRemove) {
    setCartApps((currentCart) =>
    currentCart.filter(app => app.id !== appToRemove.id)
    );
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/flatapp-store-app">
            <MainContainer
              apps={apps}
              setApps={setApps}
              handleSelectedApp={handleSelectedApp}
            />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/seller">
          <Seller />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/cart">
          <Cart cartApps={cartApps} handleRemoveFromCart={handleRemoveFromCart}/>
        </Route>
        
        </Route>
        <Route path="/details/:id">
          <ItemDetails selectedApp={selectedApp} handleAddToCart={handleAddToCart} apps={apps} setApps={setApps}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
