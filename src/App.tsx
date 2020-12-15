/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import PageControl from './PageControl';


import { AppStateProvider, DataDelete } from './base/context';

interface Props{

};
    
const App = ({}:Props)=> {

  
  return (
    // <Test/>
    <AppStateProvider>
       <PageControl >
        
       </PageControl>

    </AppStateProvider>

  );
};
export default App;
