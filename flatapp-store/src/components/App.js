import { Route, Switch } from "react-router-dom";
import About from "./About";
import Seller from "./Seller";
import Login from "./Login";
import NavBar from "./NavBar";
// import Blogs from "./Blogs"
// import Cart from "./Cart"
import MainContainer from "./MainContainer";
import { useState } from "react";
import ItemDetails from "./ItemDetails";

function App() {
  const [apps, setApps] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);

  function handleSelectedApp(newSelectedAppState) {
    setSelectedApp(newSelectedAppState);
  }
  // console.log(selectedApp);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
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
          <MainContainer
            apps={apps}
            setApps={setApps}
            handleSelectedApp={handleSelectedApp}
          />
        </Route>
        <Route path="/details/:id">
          <ItemDetails selectedApp={selectedApp} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
