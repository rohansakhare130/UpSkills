import React, { useState } from "react";
import Logo from "./assets/logo.png";
import image1 from "./assets/img1.jpg";
import image2 from "./assets/img2.jpg";
import image3 from "./assets/img3.jpg";
import image4 from "./assets/img4.jpg";
import image5 from "./assets/img5.jpg";
import image6 from "./assets/img6.jpg";
import image7 from "./assets/img7.jpg";
import image8 from "./assets/img8.jpg";
import image9 from "./assets/img9.jpg";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Sx0678g Sneaker", price: 50.0, image: image1 },
    { id: 2, name: "Casual Shoes", price: 60.0, image: image2 },
    { id: 3, name: "Dazzler Sneakers", price: 40.0, image: image3 },
    { id: 4, name: "Badminton Shoes", price: 80.0, image: image4 },
    { id: 5, name: "Sports Trekking", price: 55.0, image: image5 },
    { id: 6, name: "Sx0414g Running shoe", price: 75.0, image: image6 },
    { id: 7, name: "PassionX", price: 45.0, image: image7 },
    { id: 8, name: "Avant", price: 75.0, image: image8 },
    { id: 9, name: "Puma", price: 89.0, image: image9 },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const addValue = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity < 5
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const removeValue = (productId) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );

  };

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="container ">
      <nav className="flex w-screen p-7 items-center gap-x-10 bg-slate-200 border-t-4 border-stone-600 ">
        <div className="pr-14 ">
          <img src={Logo} className="head-img-1" alt={"logo"} />
        </div>
        <ul className="navbar-link">
          <li>Home</li>
        </ul>

        <ul className="navbar-link">
          <li>Categories</li>
        </ul>

        <ul className="navbar-link">
          <li>About Us</li>
        </ul>
      </nav>

      <div className="mt-8 flex w-screen">
        <div className="box-main bg-orange-400 flex justify-around items-center flex-wrap gap-y-24  gap-x-8 placeholder:bg-fixed ">
        {products.map(product => (
          <div className="box-1 w-60 bg-slate-200 flex flex-col items-center rounded-t-xl" key={product.id}>
            <img src={product.image} className="w-80 h-3/6 bg-cover rounded-t-xl" alt={product.name} />
            <h1 className="font-bold mt-6">{product.name}</h1>
            <p>${product.price.toFixed(2)}</p>
            <button
              className="btn1 w-28 h-10 border-solid border-2 border-indigo-600 rounded-xl mt-6"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
        </div>


        <div className="card-main  bg-orange-100">
          <h1 className="font-bold mb-4">Cart</h1>
          {cart.length === 0 ? (
            <p>Empty product</p>
          ) : (
            cart.map(item => (
          <div className="flex  mb-4 key={item.id}">
            <img src={item.image} className="w-20 h-1/6 bg-cover" alt={"item.name"} />
            <div className="pl-8">
              <p className="font-bold"> {item.name}</p>

              <div className="product flex flex-wrap mt-8 justify-between">
                <p>${item.price.toFixed(2)}</p>
                <div className="flex">
                  <button
                    className="btn2 w-8 rounded-full bg-orange-400"
                    onClick={() => removeValue(item.id)}
                  >
                    -
                  </button>
                  <p className="p-1 ml-1"> {item.quantity}</p>
                  <button
                    className="btn2 w-8 rounded-full ml-1 bg-orange-400"
                    onClick={() => addValue(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>))
            )}
          <h2 className="font-bold text-center ">Total: ${getTotalPrice()}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
