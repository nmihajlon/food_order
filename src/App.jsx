import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <>
      {/* <h1>You got this 💪</h1>
      <p>Stuck? Not sure how to proceed?</p>
      <p>Don't worry - we've all been there. Let's build it together!</p> */}

      <CartContextProvider>
        <UserProgressContextProvider>
          <Header />
          <Meals />
          <Cart />
        </UserProgressContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
