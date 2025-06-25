import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';



const FilterBill = () => {
  const [bills, setBills] = useState([]);
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    fetch('/bills.json') // Ensure this file is in the `public/` folder
      .then(res => res.json())
      .then(data => setBills(data));
  }, []);

  const uniqueTypes = ["All", ...new Set(bills.map(bill => bill.bill_type))];

  const filteredBills = selectedType === "All"
    ? bills
    : bills.filter(bill => bill.bill_type === selectedType);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Bills</h2>

      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="border p-2 rounded mb-6"
      >
        {uniqueTypes.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>

      <div className="space-y-4">
        {filteredBills.map(bill => (
          <div key={bill.id} className="flex items-center gap-4 border p-4 rounded shadow-sm">
            <img src={bill.icon} alt={bill.bill_type} className="w-12 h-12" />
            <div>
              <h3 className="font-semibold">{bill.organization}</h3>
              <p className="text-gray-600">{bill.bill_type}</p>
              <p className="text-sm text-gray-500">{new Date(bill.date).toLocaleDateString()}</p>
            </div>
            <div className="ml-auto font-bold text-lg text-green-600">
              ৳{bill.amount}
            </div>
            <div className="card-actions">
             <Link to={`/carddetail/${bill.id}`}> <button className="btn bg-blue-500 w-36 text-white">See Details</button></Link>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBill;
