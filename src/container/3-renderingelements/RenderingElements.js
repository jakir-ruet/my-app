import React from 'react';
import ReactDOM from 'react-dom';

function RenderingElements() {
    const MyElement = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(MyElement, document.getElementById('root'));
}

setInterval(RenderingElements, 1000);

export default RenderingElements;
