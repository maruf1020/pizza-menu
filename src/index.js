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
            {pizzaData.length > 0 ?
                (<>
                    <p>Amader ekhane onek gulo bhalo bhalo pizza ache. Chaile khaiya dekhte paren. Taka diye khaben amader kono pera nai</p>
                    <ul className="pizzas">
                        {pizzaData.map((pizza) => {
                            // return <Pizza name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} photoName={pizza.photoName} soldOut={pizza.soldOut} />
                            return <Pizza pizzaObj={pizza} key={pizza.name} />
                        })}
                    </ul>
                </>)
                :
                <p>We are working on our menu. We'll come back soon</p>
            }

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

    // return <footer className='footer'> {new Date().toLocaleTimeString()} We're currently open</footer>

    return <footer className="footer">
        {isOpen ? <Order closeHour={closeHour} /> : <p>You are welcome. We are open between {openHour}.00 and {closeHour}.00</p>
        }
    </footer >

    // return React.createElement('footer', null, "we're currently open")
}

function Order({ closeHour }) {
    return (<div className="order">
        <p>we are currently open until {closeHour}.00. Please come and visit us </p>
        <button className="btn">Order</button>
    </div>)
}

function Pizza({ pizzaObj }) {

    // if (pizzaObj.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObj.soldOut && 'sold-out'}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h2>{pizzaObj.name}</h2>
                <p>{pizzaObj.ingredients}</p>
                {/* {
                    pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>{pizzaObj.price}</span>
                } */}
                <span>{!pizzaObj.soldOut ? pizzaObj.price : 'SOLD OUT'}</span>
            </div>
        </li>
    )
}

const rootElm = document.getElementById('root');
const root = ReactDOM.createRoot(rootElm);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)