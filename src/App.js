import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/Container/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Contacto } from "./components/Contacto/Contacto";
import { CartProvider } from "./context/CartContext";
import { CartScreen } from "./components/CartScreen/CartScreen";
import { UIProvider } from "./context/UIContext";
import { Checkout } from "./components/Checkout/Checkout";

function App() {
  return (
    <>
      <UIProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />

            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>

              <Route exact path="/productos/:categoryId">
                <ItemListContainer />
              </Route>

              <Route exact path="/detail/:itemId">
                <ItemDetailContainer />
              </Route>

              <Route exact path="/contacto">
                <Contacto />
              </Route>

              <Route exact path="/cart">
                <CartScreen />
              </Route>

              <Route exact path="/checkout">
                <Checkout />
              </Route>

              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>

            <Footer />
          </BrowserRouter>
        </CartProvider>
      </UIProvider>
    </>
  );
}

export default App;
