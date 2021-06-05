import styles from "./../../styles/Home.module.css";
import { CartContext } from "./../_app";
import { useContext, useEffect, useState } from "react";
import CartCard from "./../../components/CartCard";

export default function Cart() {
  const cartContext = useContext(CartContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = cartContext();
    setCart(cart);
  });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.breadcrumb}>
          <h2>Cart</h2>
          <span>
            <button
              className="btn"
              style={{ backgroundColor: "green", borderColor: "green" }}
            >
              Checkout
            </button>
          </span>
        </div>

        <div className={styles.productscontainer}>
          <div>
            {cart.map((_cartItem, i) => (
              <CartCard cart={_cartItem} key={i} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
