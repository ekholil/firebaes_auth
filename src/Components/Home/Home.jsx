import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseFirebase from '../../Hooks/Usefirebase';

const Home = () => {
    const {user, logOut} = UseFirebase()
    const navigate = useNavigate()
    const handleLogout = () => {
        logOut()
        navigate('/signin')
    }
    return (
        <div>
            <h2>This is home.</h2>
            <h1>Welcome.. {user.displayName} You are registerd now</h1>
            <h1>Your Email Is: {user.email}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;