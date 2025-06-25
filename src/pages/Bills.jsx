import React from 'react';
import { useLoaderData, useOutletContext } from 'react-router';
import BillsCard from './BillsCard';
import FilterBill from './fillterBill';

const Bills = () => {
    const {addedCards} = useOutletContext()
    const data = useLoaderData()
   // console.log(addedCards)
    return (
        <div>
            <FilterBill></FilterBill>
            <h1 className='text-2xl mt-5 mb-5 text-center '> Status Bill</h1>
             {
                data.map((card)=><BillsCard card ={card} addedCards = {addedCards} key={card.id}></BillsCard>)
             }
        </div>
    );
};

export default Bills;