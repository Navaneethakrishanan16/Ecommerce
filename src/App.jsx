//akame ga kill 

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './component/Context';
import Headers from "./component/Headers"
import Hero from "./component/Hero";
import Men from "./component/Men";
import Popular from "./component/Popular";
import Cart from "./component/Cart";
import CartHover from "./component/CartHover"

function App() {


  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Headers />}>
            <Route index element={<Hero />} />
            <Route path="Popular" element={<Popular />} />
            <Route path="Men" element={<Men />} />
            <Route path="hover" element={<CartHover />} />
            {<Route path="Cart" element={<Cart />} />}
          </Route>
        </Routes>  
      </CartProvider>
    </BrowserRouter>

  );
}

export default App;

