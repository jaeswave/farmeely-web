import { useState } from "react";
import Button from "../components/Button";

const OtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (value.match(/^[0-9]$/) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.join("").length === 6) {
      alert(`OTP Submitted: ${otp.join("")}`);
    }
  };

  const isOtpComplete = otp.join("").length === 6;

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Enter OTP</h2>
        <p className="text-gray-600 text-center mb-6">
          We’ve sent an OTP to your email. Please enter it below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center space-x-2 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                maxLength={1}
                className="w-12 h-12 text-center text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
                placeholder="-"
              />
            ))}
          </div>
          <Button
            type="submit"
            title="Verify OTP"
            className="!w-full"
            disabled={!isOtpComplete}
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
