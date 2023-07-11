import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

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
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>

    )
}

function Header() {
    // const style = { color: "red", fontSize: "50px", textDecoration: "underline" }
    const style = {}
    return (<header className='header'>
        <h1 style={style}>Int. Dhakaiya Pizza</h1>
    </header>)
}

function Menu() {
    return (
        <menu className='menu'>
            <h2>Menu</h2>
            <div className="pizzas">
                {pizzaData.map((pizza) => {
                    return <Pizza name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} photoName={pizza.photoName} soldOut={pizza.soldOut} />
                })}
            </div>
        </menu>
    )
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 0;
    const closeHour = 23;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if (isOpen) {
    //     alert("We're currently open");
    // } else {
    //     alert("we are currently Close")
    // }

    return <footer className='footer'> {new Date().toLocaleTimeString()} We're currently open</footer>
    // return React.createElement('footer', null, "we're currently open")
}

function Pizza(props) {
    return (
        <div className='pizza'>
            <img src={props.photoName} alt={props.name} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.ingredients}</p>
                <span>{props.price}</span>
            </div>
        </div>
    )
}

const rootElm = document.getElementById('root');
const root = ReactDOM.createRoot(rootElm);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)