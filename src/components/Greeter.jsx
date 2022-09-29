import React from 'react';

const Greeter = ({phrase, name}) => {
    return (
        <header>
            {phrase}, {name}!
        </header>
    );
}

export default Greeter;