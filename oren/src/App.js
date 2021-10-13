import React, {useState, useEffect} from "react";

import Card from "./components/Card";
import './App.css'
import {getData} from './api/fetchData'


function App() {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        getData().then(res => {
            setUserData(res)
        }).catch(err => console.log(err))
    }, [])

    return (
        <div className="App">
            {
            userData.length > 0 && userData.map(({name, email, website, phone}) => {
                return <Card name={name}
                    email={email}
                    website={website}
                    phone={phone}/>
            })
        } </div>
    );
}

export default App;
