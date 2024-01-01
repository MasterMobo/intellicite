// ThemeProvider.js
import React, { useState } from 'react';
import MenuContext from './Context';

const MenuProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
    const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu((prevTheme) => !prevTheme);
  };

  return (
    <MenuContext.Provider value={{ isOpenMenu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
