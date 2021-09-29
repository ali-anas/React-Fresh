import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Phone",
      qty: 1,
      img_url: "",
    };
  }

  increaseQuantity = () => {
    // // setState form1
    // this.setState({
    //   qty: this.state.qty + 1,
    // });

    // setState form 2
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };

  decreaseQuantity = () => {
    if (this.state.qty < 1) {
      return;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };

  render() {
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{this.state.title}</div>
          <div style={{ color: "#777" }}>{this.state.price}</div>
          <div style={{ color: "#777" }}>Qty: {this.state.qty}</div>
          <div className="cart-item-actions">
            <img
              alt="increase"
              className="action-icons"
              src="../assets/add-button.png"
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="../assets/subtract-button.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="../assets/delete-button.png"
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
