import React, { Component } from 'react';
import StockList from './StockList';
import UserList from './UserList';

import HocWrapper1 from '@/hoc/HocWrapper1';

const StocksData = [
    {
        id: 1,
        name: 'TCS'
          
    },
    {
        id: 2,
        name: 'Infosys'
    },
    {
        id: 3,
        name: 'Reliance'
    }
  ];
  const UsersData = [
    {
        id: 1,
        name: 'Krunal'
          
    },
    {
        id: 2,
        name: 'Ankit'
    },
    {
        id: 3,
        name: 'Rushabh'
    }
  ];
  
  const Stocks = HocWrapper1( StockList, StocksData );
  
  const Users = HocWrapper1( UserList, UsersData );
  

function AppHoc1(props){
        return(
            <div>
                <Users></Users>
                <Stocks></Stocks>
            </div>
        );
}
export default HocWrapper1(AppHoc1);
