import Header from "./components/Header/Header";
import Card from "./components/card/Card";
import Navbar from "./components/Navbar";
import CartList from './components/CartList';
import Footer from './components/Footer/Footer';
import { Route, Switch   } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Card/>
          </div>
        </Route>

        <Route exact path="/cart" component={CartList}>
          
        </Route>
        <Route exact path="/orders">
          <Navbar text={"This is Orders Page"} />
        </Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;