import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "watch",
          qty: 1,
          img_url: "",
          id: 1,
        },
        {
          price: 999,
          title: "Phone",
          qty: 4,
          img_url: "",
          id: 2,
        },
        {
          price: 9999,
          title: "Laptop",
          qty: 4,
          img_url: "",
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    // console.log("update the quantity of this product.", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({ products });
  };

  handleDecreaseQuantity = (product) => {
    // console.log("update the quantity of this product.", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({ products });
  };

  handleDeleteItem = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product, index) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDelete={this.handleDeleteItem}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
