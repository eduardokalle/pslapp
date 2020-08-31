import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './navigation/Drawer';
import HomeFirst from './navigation/HomeFirst';

export default () => {
  
  const  [ showMain, setShowMain ]  = useState(false);

  return (
    <NavigationContainer>
       {
        !showMain ? (<HomeFirst setShowMain={setShowMain}/>) : (<Drawer />)
       }
    </NavigationContainer>    
  );
};


