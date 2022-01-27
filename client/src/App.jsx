import React, { useState, useEffect } from 'react';
import Form from './Components/Form'
import './App.css';
import axios from 'axios';
// import Data from './Components/Data';
function App() {
    const [state, setState] = useState({})
    useEffect(() => {
        // const url = "http://localhost:8000/api/data";

        // const fetchData = async () => {
        //   try {
        //     const response = await fetch(url);
        //     const json = await response.json();
        //     console.log(json)
        //     setState(json);
        //   } catch (error) {
        //     console.log("This is error", error);
        //   }
        // };
    
        // fetchData();

        axios.get('http://localhost:8000/api/data', { withCredentials: true })
        .then(response => setState(response.data));

    }, [])
    return (
        <>
            <div>
                <Form />
                {state.displayName}<br />
                {state.id}
            </div>        
        </>
    )

}

export default App;
