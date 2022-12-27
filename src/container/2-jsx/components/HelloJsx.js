import React from 'react';

function HelloJsx() {
    // return (
    //     <div className='app-text'>
    //         <p>Hello, JSX Are you listen to me?</p>
    //     </div>
    // );
    //JSX Form
    // return React.createElement('div', null, '<h1>Hello, JSX Are you listen to me?</h1>');
    //OR
    return React.createElement(
        'div',
        { className: 'app-text' },
        React.createElement('h1', null, 'Hello, JSX Are you listen to me?')
    );
}
export default HelloJsx;
