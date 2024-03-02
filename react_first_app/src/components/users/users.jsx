import React, { useEffect, useState } from 'react';
import axios  from 'axios';
import { NavLink, Outlet } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect( () => {
        getUsers();
    }, [])
    const getUsers = async() => {
        const response = await axios("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data);
    }
    return (
        <div>
            <h2>Users</h2>
            {users.map(user => <div key={user.id}><NavLink to={`/users/${user.id}`}>{user.name}</NavLink></div>)}
            <Outlet/>
        </div>
    );
}

export default Users;
