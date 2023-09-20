import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { UIActions } from "./store/ui-slice";
import { fetchCartData } from "./store/cart-slice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.UI.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.UI.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (!cart.changed) return;

    const sendCartData = async () => {
      dispatch(
        UIActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data..",
        })
      );

      const res = await fetch(
        "https://food-order-app-238f5-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!res.ok) {
        throw new Error("Sending cart data failed.");
      }

      dispatch(
        UIActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };

    sendCartData().catch((error) => {
      dispatch(
        UIActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsVisible && <Cart />}
        {!cartIsVisible && <Products />}
      </Layout>
    </>
  );
}

export default App;
