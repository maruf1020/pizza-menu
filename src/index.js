import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    return <h1>Hello MF React</h1>
}

const rootElm = document.getElementById('root');
const root = ReactDOM.createRoot(rootElm);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)