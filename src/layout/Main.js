import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1>My Email password Authentication</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;