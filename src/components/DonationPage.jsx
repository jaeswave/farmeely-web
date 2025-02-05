import { useState } from "react";
import Button from "../components/Button";
import { usePaystackPayment, PaystackConsumer } from "react-paystack";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
// import { } from 'react-paystack';

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [currency, setCurrency] = useState("naira");
  const { data } = useSelector((state) => state.customerData);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const config = {
    reference: new Date().getTime().toString(),
    email: data.data.email,
    amount: donationAmount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: import.meta.env.VITE_PAYSTACK_KEY,
  };

  // you can call this function anything
  const handleSuccess = (reference) => {
    console.log(reference);
    toast.success("Thanks for your donation 🎉");
    setShowConfetti(() => true);
    setTimeout(() => {
      setShowConfetti(() => false);
    }, 3000); // Hide confetti after 3 seconds

    // Implementation for whatever you want to do with reference and after success call.
  };

  // you can call this function anything
  const handleClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

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

  // const initializePayment = usePaystackPayment(config);
  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose,
  };

  return (
    <>
      <section className="bg-customGreen bg-opacity-[8%] flex justify-center items-center min-h-screen py-10">
        <div className="bg-customWhite w-[70%] py-6 px-5 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-4">Donate</h1>
          <p className="text-center mb-6 text-lg text-gray-600">
            Your generosity helps us continue our mission of spreading the
            Quran’s light.
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
            <PaystackConsumer {...componentProps}>
              {({ initializePayment }) => (
                <button
                  onClick={() => initializePayment(handleSuccess, handleClose)}
                >
                  Paystack Consumer Implementation
                </button>
              )}
            </PaystackConsumer>
            {/* <Button
              className="px-6 py-2 bg-green-500 text-white rounded-lg"
              title="Continue"
              onClick={() => {
                initializePayment(onSuccess, onClose);
              }}
            /> */}
          </div>
        </div>
      </section>
      {showConfetti && <Confetti width={width} height={height} />}
    </>
  );
};

export default DonationPage;
