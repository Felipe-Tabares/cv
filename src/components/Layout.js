import React from 'react';
import NavMenu from './NavMenu';

const Layout = ({ children }) => (
    <div>
        <NavMenu />
        <div>
            {children}
        </div>
    </div>
);

export default Layout;
