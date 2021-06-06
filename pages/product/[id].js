import styles from "../../styles/ProductView.module.css";
import { useRouter } from "next/router";
import products_data from "./../../data/products_data";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "./../_app";

export default function Product(params) {
  const { getCart, removeFromCart, addToCart } = useContext(CartContext);
  const [inCart, setInCart] = useState(false);

  const router = useRouter();
  const {
    query: { id },
  } = router;
  const product = products_data.find((_product) => _product.id == id);

  useEffect(() => {
    const cart = getCart();
    const _cartFound = cart.find((_prdct) => _prdct.id == id);
    const inCart = _cartFound ? true : false;
    setInCart(inCart);
  });

  function _addToCart() {
    console.log("add");
    addToCart(product);
    /*
    var state = window.localStorage.getItem("state");
    if (state) {
      var arr = JSON.parse(state);
      arr.push(product);
      window.localStorage.setItem("state", JSON.stringify(arr));
    } else {
      var arr = [product];
      window.localStorage.setItem("state", JSON.stringify(arr));
    }
    window.location.reload();*/
  }

  function _removeFromCart() {
    console.log("remocve");
    removeFromCart(product);
    /*
    const cart = cartContext();
    var remProducts = cart.filter((_prduct) => _prduct.id != id);
    window.localStorage.setItem("state", JSON.stringify(remProducts));
    window.location.reload();
    */
  }

  return (
    <div className={styles.productviewcontainer}>
      <div className={styles.productviewmain}>
        <div
          style={{ backgroundImage: `url(${product?.imageUrl})` }}
          className={styles.productviewimg}
        ></div>
        <div style={{ width: "100%", marginLeft: "15px" }}>
          <div className={styles.productviewname}>
            <h1>{product?.name}</h1>
          </div>
          <div className={styles.productviewminidet}>
            <div
              style={{
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
                paddingTop: "18px",
                paddingBottom: "18px",
              }}
            >
              <span
                style={{
                  marginRight: "4px",
                  color: "rgb(142 142 142)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Price:{"  "}
                <span style={{ color: "black", fontSize: "2em" }}>
                  {product?.price}
                </span>
              </span>
            </div>
            <div style={{ padding: "14px 0" }}>
              <span>
                {!inCart ? (
                  <button className="btn" onClick={_addToCart}>
                    Add to Cart
                  </button>
                ) : (
                  <button className="btn-danger" onClick={_removeFromCart}>
                    Remove from Cart
                  </button>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
