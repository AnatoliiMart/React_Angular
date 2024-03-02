import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const User = () => {
    
    const {id} = useParams();
    const [user, setUser] = useState({});
    const redirect = useNavigate();
    const [statePromise, setstatePromise] = useState("idle");
    useEffect( () => {
        getUser();
    }, [id])

    const getUser = async() => {
        try {
            setstatePromise("pending")
            const response = await axios("https://jsonplaceholder.typicode.com/users/" + id)
            setstatePromise("fullfilled")
            setUser(response.data);
        } catch (error) {
            // redirect("/");
           setstatePromise("rejected");
        }
    }
    if (statePromise === "pending" || statePromise === "idle") {
        return "Loading...";
    }
    else if (statePromise === "rejected"){
        return "User not found"
    }
    else
        return (
            <div>
                <h1>{user.name}</h1>
                <div>{user.email}</div>
                <div>{user.company?.name}</div>
            </div>
        );
}

export default User;
