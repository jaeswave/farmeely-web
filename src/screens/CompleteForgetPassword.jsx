import { useState } from "react";
import Button from "../components/Button";

const CompleteForgetPasswordPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("OTP:", otpCode);
    console.log("New Password:", newPassword);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-customGreen bg-opacity-[8%]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[55%] h-[70%]">
        <h2 className="text-5xl font-bold text-center mb-4">Reset Password</h2>
        <p className="text-customBlack text-center mb-6">
          Enter the OTP sent to your email and set a new password.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-center space-x-2">
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
          <div>
            <label htmlFor="newPassword" className="block text-gray-700">
              New Password
            </label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
              placeholder="Enter new password"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
              placeholder="Confirm new password"
            />
          </div>
          <Button type="submit" title="Reset Password" className="!w-full" />
        </form>
      </div>
    </div>
  );
};

export default CompleteForgetPasswordPage;
