// import { useState } from "react";

// const DonationPage = () => {
//   const [donationAmount, setDonationAmount] = useState(0);
//   const [isMonthly, setIsMonthly] = useState(false);

//   const handleAmountChange = (amount) => {
//     setDonationAmount(amount);
//   };

//   const handleDonationTypeChange = (type) => {
//     setIsMonthly(type === "monthly");
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h1 className="text-3xl font-bold text-center mb-4">Donate</h1>
//       <p className="text-center mb-6 text-lg text-gray-600">
//         Your generosity helps us continue our mission of spreading the Quran’s
//         light.
//       </p>

//       <div className="flex justify-center mb-6">
//         <button
//           onClick={() => handleDonationTypeChange("one-time")}
//           className={`px-6 py-2 mr-4 rounded-full ${
//             !isMonthly ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"
//           }`}
//         >
//           One Time
//         </button>
//         <button
//           onClick={() => handleDonationTypeChange("monthly")}
//           className={`px-6 py-2 rounded-full ${
//             isMonthly ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"
//           }`}
//         >
//           Monthly
//         </button>
//       </div>

//       <div className="grid grid-cols-3 gap-4 mb-6">
//         {[1000, 2000, 5000, 10000, 20000, 30000].map((amount) => (
//           <button
//             key={amount}
//             onClick={() => handleAmountChange(amount)}
//             className="px-4 py-2 bg-green-100 text-green-800 rounded-full"
//           >
//             ₦ {amount}
//           </button>
//         ))}
//       </div>

//       <div className="mb-6 flex justify-center">
//         <input
//           type="number"
//           placeholder="Enter custom amount"
//           value={donationAmount}
//           onChange={(e) => setDonationAmount(e.target.value)}
//           className="px-4 py-2 border rounded-lg"
//         />
//       </div>

//       <div className="text-center">
//         <button className="px-6 py-2 bg-green-500 text-white rounded-lg">
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DonationPage;




import { useState } from "react";
import MonthlyDonationForm from "../components/MonthlyDonation"; 
const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [isMonthly, setIsMonthly] = useState(false);

  const handleAmountChange = (amount) => {
    setDonationAmount(amount);
  };

  const handleDonationTypeChange = (type) => {
    setIsMonthly(type === "monthly");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-4">Donate</h1>
      <p className="text-center mb-6 text-lg text-gray-600">
        Your generosity helps us continue our mission of spreading the Quran’s
        light.
      </p>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => handleDonationTypeChange("one-time")}
          className={`px-6 py-2 mr-4 rounded-full ${
            !isMonthly ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          One Time
        </button>
        <button
          onClick={() => handleDonationTypeChange("monthly")}
          className={`px-6 py-2 rounded-full ${
            isMonthly ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          Monthly
        </button>
      </div>

      {/* Show donation amount options */}
      {!isMonthly && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[1000, 2000, 5000, 10000, 20000, 30000].map((amount) => (
            <button
              key={amount}
              onClick={() => handleAmountChange(amount)}
              className="px-4 py-2 bg-green-100 text-green-800 rounded-full"
            >
              ₦ {amount}
            </button>
          ))}
        </div>
      )}

      {!isMonthly && (
        <div className="mb-6 flex justify-center">
          <input
            type="number"
            placeholder="Enter custom amount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          />
        </div>
      )}

      {/* Conditionally render the Monthly Donation form */}
      {isMonthly && <MonthlyDonationForm />}

      <div className="text-center mt-6">
        <button className="px-6 py-2 bg-green-500 text-white rounded-lg">
          Continue
        </button>
      </div>
    </div>
  );
};

export default DonationPage;
