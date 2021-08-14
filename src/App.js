import Header from "./components/Header/Header";
import Card from "./components/card/Card";
import Navbar from "./components/Navbar";
import CartList from './components/CartList';
import Footer from './components/Footer/Footer';
import { Route, Switch   } from "react-router-dom";
import { useState } from 'react';
import { Data } from './utility/Data';
import  SortPrice from './components/Filters/SortPrice';
import IdealFor from './components/Filters/IdealFor';
import Brand from './components/Filters/Brand';
import Sizes from './components/Filters/Size';

function App() {
  const [productList, setProductList] = useState(Data.productData);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <div
        className="App"
        style={{
          display: "flex",
          textAlign: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop:'5px'
        }}
      >
        <SortPrice list={productList} sortProducts={setProductList} />
        <IdealFor />
        <Brand />
        <Sizes />
      </div>
      <div style={{alignItems:"center",paddingLeft:"50%"}}>
           <button className="btn-danger">Clear Filters</button>
      </div>
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