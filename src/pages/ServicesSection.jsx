import React from 'react';
import { Link } from 'react-router';

const ServicesSection = () => {
    return (
        <div>
            {/* .... Payment history .... */}

       <div className="bg-gradient-to-br from-blue-50 to-gray-50 py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
      Simple Bill Payment Process
    </h2>
    <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
      Pay your bills in just a few clicks with our secure and easy-to-use platform
    </p>
    
    <div className="grid md:grid-cols-4 gap-8">
      {[
        {
          title: "Login to your account",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
          )
        },
        {
          title: "Select 'Bill Payment'",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          )
        },
        {
          title: "Choose biller (e.g. DESCO)",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          )
        },
        {
          title: "Confirm and pay securely",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )
        }
      ].map((step, idx) => (
        <div 
          key={idx} 
          className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 border border-gray-100"
        >
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full text-blue-600">
                {step.icon}
              </div>
            </div>
            <div className="text-xl font-bold text-blue-500 mb-2">{idx + 1}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{step.title}</h3>
            <p className="text-sm text-gray-500 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Simple and secure process
            </p>
          </div>
        </div>
      ))}
    </div>
    
    <div className="text-center mt-12">
        <Link to={"/bills"}>
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
        Start Paying Now
      </button>
        </Link>
     
    </div>
  </div>
</div>
      

{/* ....payment history..... */}

<div className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Recent Transactions</h2>
      <p className="text-lg text-gray-600">Your payment history at a glance</p>
    </div>

    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Organization
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bill No.
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[
              { org: "DESCO", billNo: "#98213", amount: "৳1,200", date: "May 2, 2025", status: "Completed", icon: "⚡" },
              { org: "WASA", billNo: "#56124", amount: "৳650", date: "April 28, 2025", status: "Completed", icon: "💧" },
              { org: "NESCO", billNo: "#89127", amount: "৳1,050", date: "April 20, 2025", status: "Completed", icon: "💡" },
              { org: "Titas Gas", billNo: "#34189", amount: "৳1,850", date: "April 15, 2025", status: "Completed", icon: "🔥" }
            ].map((payment, index) => (
              <tr key={index} className="hover:bg-blue-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      {payment.icon}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{payment.org}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 font-mono">{payment.billNo}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">{payment.amount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{payment.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-200">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of <span className="font-medium">4</span> transactions
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>

    <div className="mt-8 text-center">
      <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
        View Full Payment History
        <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</div>

{/* .....reminder section ...... */}

<div className="py-16 px-4 sm:px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        <span className="relative inline-block">
          Never Miss a Payment
          <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-200 opacity-50 -z-10"></span>
        </span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Get smart reminders before your bills are due. We'll notify you via email, SMS, or app notifications.
      </p>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1 w-full">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-5 py-4 pr-12 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
            />
            <svg 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
        </div>
        <button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          Get Reminders
        </button>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <div className="flex items-center text-sm text-gray-600">
          <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Email reminders
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          SMS alerts
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          App notifications
        </div>
      </div>
    </div>

    <div className="mt-8 text-center text-sm text-gray-500">
      We respect your privacy. Your email will only be used for payment reminders.
    </div>
  </div>
</div>

{/* ..... payment history....... */}


<div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-orange-700                  text-white">
  <div className="max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="inline-block bg-blue-700 px-2 py-1 rounded-lg">Bank-Grade</span> Security
      </h2>
      <p className="text-lg text-blue-100 max-w-2xl mx-auto">
        Your transactions are protected with military-grade 256-bit encryption and multi-factor authentication.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "End-to-End Encryption",
          description: "All data is encrypted in transit and at rest",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          )
        },
        {
          title: "PCI DSS Compliant",
          description: "Certified to the highest payment security standards",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )
        },
        {
          title: "24/7 Fraud Monitoring",
          description: "Real-time detection of suspicious activity",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )
        }
      ].map((feature, index) => (
        <div key={index} className="bg-blue-700 bg-opacity-30 p-6 rounded-xl backdrop-blur-sm border border-blue-300 hover:border-blue-400 transition-all duration-300">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 mb-4 bg-blue-700 rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-blue-100">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-16 flex flex-wrap justify-center gap-6 items-center">
      {[
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Paypal_2014_logo.png/640px-Paypal_2014_logo.png"
      ].map((logo, index) => (
        <img 
          key={index} 
          src={logo} 
          alt="Payment partner" 
          className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity" 
        />
      ))}
    </div>
  </div>
</div>

        </div> 
    );
};

export default ServicesSection;