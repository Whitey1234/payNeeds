import React, { useState } from 'react';

import { Outlet } from 'react-router';
import Navbar from '../component/navbar';
import Footer from '../component/Footer';

const HomeLayout = () => {
  const [money, setMoney] = useState(1000);
  const [addedCards, setAddedCards] = useState([]);

  const handleAddMoney = (amount, id) => {
    alert(' Bill paid sucessfully')
    if (!addedCards.includes(id)) {
      setMoney(prev => prev - parseFloat(amount));
      setAddedCards(prev => [...prev, id]);
      
    }
  
  };

  return (
    <div>
        <Navbar  money={money}></Navbar>
      
      <Outlet context={{ handleAddMoney, addedCards }} />
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
