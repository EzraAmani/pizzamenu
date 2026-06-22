//The index.js file (or main.jsx / index.tsx in newer setups) is the entry point of your entire React application.
// it connects code to the browser.
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //   const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* we use the ternary operator to check if the menu is available */}
      {/* in the js mode we can only write something that produces a value and an if statement does not produce a value */}
      {numPizzas > 0 ? (
        //this is a react fragment
        //react fragments allow us to have more than one element in jsx
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to chose from. All from
            our stone oven, all organic, all delicious.
          </p>
          //here we create one pizza component and pass many pizza objects into
          that component using props //props can only be passed from parents to
          children not the other way round //we render multiple components of
          the same type by looping over the array thus creating a list
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
      {/* <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, mushrooms"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

//we attempt prop destructing here
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 7;
  const closeHour = 15;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <div>
      {/* this is conditional rendering with ternaries */}
      <footer className="footer">
        {isOpen ? (
          <Order closeHour={closeHour} openHour={openHour} />
        ) : (
          <p>
            We're currently closed but happy to welcome you between 0{openHour}
            :00Hrs and {closeHour}:00Hrs.
          </p>
        )}
      </footer>
    </div>
  );
}
//props destructing in action too
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from 0{openHour}:00Hrs to {closeHour}:00Hrs. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
//strict mode checks the component twice for bugs and also check if we're using outdated parts of the react api
//we link this to the index.html in the public folder to render on the screen
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
