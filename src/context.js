import React, { useState, createContext } from 'react';

export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
    const [active, setActive] = useState(false);
    const value = {
        active: active,
        setActive: setActive
    };
    
    return (
        <ApplicationContext.Provider value={value}>
            {children}
        </ApplicationContext.Provider>
    );
}