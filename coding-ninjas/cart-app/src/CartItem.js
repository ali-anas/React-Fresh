import React from "react";

class CartItem extends React.Component {
  render() {
    const { title, qty, price } = this.props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDelete } =
      this.props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>{price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            <img
              alt="increase"
              className="action-icons"
              src="../assets/add-button.png"
              onClick={() => onIncreaseQuantity(product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="../assets/subtract-button.png"
              onClick={() => onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="../assets/delete-button.png"
              onClick={() => onDelete(product.id)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
