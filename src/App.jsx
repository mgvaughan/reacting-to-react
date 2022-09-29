import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter'

const App = () => {

    useEffect(() => {
        setTimeout(() => {
            setLoaded(!loaded);
          }, 3000);
    }, []);

    const [loaded, setLoaded] = useState(false);
    
    const handleLoadedChange = () => {
        setLoaded(!loaded);
    };

    const [username, setUsername] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    if(loaded === false) {
        return (
            <>
                <header>Website Loading... </header>
                <button onClick={handleLoadedChange} >Click Me to Load!</button>
            </>
        );
    } 
    return (
        <>
            {/* <h1>Hellooo World!</h1> */}
            <Greeter phrase="Hi there" name="Michael"  />
            <Greeter phrase="What's up" name="Vaughan"  />
            <Greeter phrase="Hasta la vista" name="Baby"  />
            <input value={username} onChange={handleUsernameChange} />
            <p>You are logging in as: {username}</p>
        </>
    );
}

export default App;