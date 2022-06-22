import { Route, Switch } from "react-router-dom";
import About from "./About"
import Seller from "./Seller"
import Login from "./Login"
import Store from "./Store"
import NavBar from "./NavBar";
// import Blogs from "./Blogs"
// import Cart from "./Cart"
// import MainContainer from "./MainContainer"


function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path='/login'>
            <Login />
        </Route>
        <Route path="/seller">
          <Seller />
        </Route>
        {/* <Route path="/blogs">
          <Blogs />
        </Route> */}
        {/* <Route path="/cart">
          <Cart />
        </Route> */}
        <Route exact path="/">
          <Store />
        </Route>
      </Switch>

      {/* <MainContainer /> */}

    </div>
  );
}

export default App;
