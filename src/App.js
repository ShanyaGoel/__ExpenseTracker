import React from 'react';
import './App.css';
import {Header} from'./component/Header';
import {Balance} from'./component/Balance';
import {Incexpe} from'./component/Incexpe'; 
import {TransactionList} from'./component/TransactionList';
import {AddTransaction} from'./component/AddTransaction';
import {GlobalProvider} from './Context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance/>
        <Incexpe/>
        <TransactionList/>
        <AddTransaction/>
      </div>

    </GlobalProvider>
  );
}

export default App;
