import './App.css';
import HomePage from './Components/home_page';
import ShowProductsList from './Components/products';
import React, {useState} from 'react';
import Tips from './Components/tips';
import Nav from './Components/nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import myJson from './Components/makeupList.json';
import Cart from './Components/cart';
import ProductPage from './Components/productPage';
import HorizontalLabelPositionBelowStepper from './Components/paymentPage'
import FooterPage from './Components/footer';
import About from './Components/about'



function App() {
  const[cartList, setCartProduct]=useState([])
const[ generalNnumberOfcartList,setGeneralNnumberOfcartList]=useState(0)

  return ( 
    <div >
      <Router>
        <div className="App">
         
          <Nav generalNnumberOfcartList={generalNnumberOfcartList}/>
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/eyes" render={()=><ShowProductsList category={`eyes`} /*items={myJson.eyesList}*/  cartList={cartList} setCartProduct={setCartProduct} />}/> 
            <Route path="/face" render={()=><ShowProductsList category={`face`} /*items={myJson.faceList}*/  cartList={cartList} setCartProduct={setCartProduct} />}/> 
            <Route path="/lips" render={()=><ShowProductsList category={`lips`} /*items={myJson.lipsticsList}*/  cartList={cartList} setCartProduct={setCartProduct} />}/> 
            <Route path="/tips" render={()=><Tips />}/>
            <Route path="/cart" render={()=><Cart cartList={cartList} generalNnumberOfcartList={generalNnumberOfcartList} />}/> 
            <Route path="/productPage" render={(history)=><ProductPage history={history} cartList={cartList} setCartProduct={setCartProduct}  generalNnumberOfcartList={generalNnumberOfcartList} setGeneralNnumberOfcartList={setGeneralNnumberOfcartList}/>} /> 
            <Route path="/payment" render={()=><HorizontalLabelPositionBelowStepper cartList={cartList}/>} /> 
            <Route path="/about" render={()=> <About/>}/>
          </Switch>
        </div>
      </Router>
      <FooterPage/>
    </div>
  );
}

export default App;
