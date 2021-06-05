import styles from "./CartCard.module.css";

export default function CartCard({ cart }) {
  const { name, imageUrl, price } = cart;
  return (
    <div className={styles.cartcard}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={styles.cartcardimg}
      ></div>
      <div className={styles.cartcarddetails}>
        <div className={styles.cartcardname}>
          <h3>{name}</h3>
        </div>
        <div className={styles.cartcardprice}>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
}
