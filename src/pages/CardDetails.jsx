import React, { useEffect, useState } from 'react';
import { Navigate, useLoaderData, useNavigate, useOutletContext, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardDetails = () => {
    
    const navigate = useNavigate()
    const {handleAddMoney,addedCards} = useOutletContext()
    const [card,setCard] = useState({})
 const {id} =useParams()
const data =useLoaderData()
//console.log (data,id)
useEffect(()=>{
    const cardData = data.find((dataCard)=>dataCard.id == id)
    setCard(cardData)
   
    
   },[data,id])

const handleClick = () => {
    toast.success("✅ Bill Paid Successfully!");
    // toast.error("Something went wrong!");
    // toast.info("This is an info message.");
  };
console.log( typeof card.amount)
  const alreadyAdded = addedCards.includes(card.id)
    return (
       <div>

          
            
            <div className="card bg-linear-to-bl from-violet-500 to-fuchsia-500 image-full w-96 shadow-xl shadow-lime-500 mx-auto mt-48 ">
  <figure className='px-32'>
    <img
      src={card.icon}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className=" text-white text-center text-2xl">{card.bill_type}</h2>
    <h2 className=' '> <span className='text-xl text-black'> Fee : </span> : <span className='text-red-600 font-bold text-3xl'>{card.amount}</span>  </h2>
    <p><span className='text-xl text-black'> Date : </span>{card.date}</p>
    <div className="card-actions justify-end">
      <button onClick={() => {
    handleAddMoney(card.amount, card.id);
    handleClick()
    navigate('/bills');
  }}
      disabled = {alreadyAdded}
     
       className="btn bg-pink-500">Pay Bill</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CardDetails;