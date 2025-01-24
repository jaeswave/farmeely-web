import { useState } from "react";
import Button from "../components/Button";

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [currency, setCurrency] = useState("naira");

  const handleAmountChange = (amount) => {
    setDonationAmount(amount);
  };

  const handleCurrencyChange = (selectedCurrency) => {
    setCurrency(selectedCurrency);
    setDonationAmount(0); // Reset amount when switching currency
  };

  const amountOptions = {
    naira: [10000, 20000, 50000, 100000, 200000, 300000],
    dollar: [50, 100, 200, 500, 1000, 2000],
  };

  return (
    <section className="bg-customGreen bg-opacity-[8%] flex justify-center items-center min-h-screen py-10">
      <div className="bg-customWhite w-[70%] py-6 px-5 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">Donate</h1>
        <p className="text-center mb-6 text-lg text-gray-600">
          Your generosity helps us continue our mission of spreading the Quran’s
          light.
        </p>

        <div className="place-self-center space-x-5 mb-6">
          <Button
            onClick={() => handleCurrencyChange("naira")}
            className={` !rounded-full ${
              currency === "naira"
                ? "bg-customGreen"
                : "bg-gray-200 text-gray-800"
            }`}
            title="Naira (₦)"
          />
          <Button
            onClick={() => handleCurrencyChange("dollar")}
            className={` !rounded-full ${
              currency === "dollar"
                ? "bg-customGreen text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            title="Dollar ($)"
          />
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6">
          {amountOptions[currency].map((amount) => (
            <Button
              key={amount}
              onClick={() => handleAmountChange(amount)}
              className=" bg-green-100 text-green-800 rounded-full"
              title={currency === "naira" ? `₦ ${amount}` : `$ ${amount}`}
            />
          ))}
        </div>

        <div className="mb-6 flex justify-center">
          <input
            type="number"
            placeholder={
              currency === "naira"
                ? "Enter custom amount (₦1000+)"
                : "Enter custom amount ($50+)"
            }
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            className="px-4 py-2 border rounded-lg"
            min={currency === "naira" ? 1000 : 50}
          />
        </div>

        <div className="text-center mt-6">
          <Button
            className="px-6 py-2 bg-green-500 text-white rounded-lg"
            title="Continue"
          />
        </div>
      </div>
    </section>
  );
};

export default DonationPage;
