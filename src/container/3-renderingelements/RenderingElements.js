import React from 'react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

function RenderingElements() {
    const MyElement = (
        <div>
            <h1>Rendering</h1>
            <h2>{new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    root.render(MyElement);
    // ReactDOM.render(MyElement, document.getElementById('root'));
}

setInterval(RenderingElements, 1000);

export default RenderingElements;
