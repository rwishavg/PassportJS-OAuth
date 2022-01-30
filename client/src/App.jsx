import React, { useState, useEffect } from 'react';
import Form from './Components/Form'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import axios from 'axios';
import profile from './assets/template.jpg'

// import Data from './Components/Data';
function App() {
    const [state, setState] = useState({})
    const [isLoggedIn, setLogin] = useState(false)
    const [imgLink, setImage] = useState(profile)
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

        axios.get('/api/data', { withCredentials: true })
        .then(response => setState(response.data));

        console.log(state)
        if(Object.keys(state).length === 0){
            setLogin(false)
        }
        else{
            setLogin(true)
            setImage(state._json.picture)
        }
    }, [state])
    return (
        <>
            <div>
                <BrowserRouter>
                <Routes>
                    <Route path="/form" element={<Form />}>
                    </Route>
                    </Routes>
                </BrowserRouter>
                {state.displayName}<br/>
                {state.id}<br/>
                <img style={{height: "100px", width:"100px"}} src={imgLink}  alt="" />
            </div>        
        </>
    )

}

export default App;
