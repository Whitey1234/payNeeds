import React from 'react';
import { Link,  } from 'react-router';
import { FaCheckCircle } from 'react-icons/fa'

const BillsCard = ({card,addedCards }) => {
    
 console.log(addedCards);
  return (
    <div>
    
      <div className="card bg-base-100 w-96 shadow-xl mx-auto mb-7 mt-6">
       <h1 className='flex justify-center mt-3 gap-2'>
       
       {
            addedCards == card.id ?    <FaCheckCircle size={40} color="green" /> : null
        }
         {
            addedCards == card.id ?   <button className='btn border border-red-500 '> Paid</button> : null
        }
       </h1>
       
        <figure className="px-10 pt-10">

          <img src={card.icon} alt="Bill Icon" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{card.bill_type}</h2>
          <h2 className="text-xl font-bold ">Organization:<span className='italic  underline '>  {card.organization}</span></h2>
          <p className="font-bold">
            <span className="text-black">Amount:</span> <span className=' text-red-600'>{card.amount}</span> 
          </p>
          <div className="card-actions">
             <Link to={`/carddetail/${card.id}`}> <button className="btn bg-blue-500 w-36 text-white">See Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillsCard;
