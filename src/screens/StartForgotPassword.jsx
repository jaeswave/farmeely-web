import { useState } from "react";
import Button from "../components/Button";

const StartForgetPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email Submitted:", email);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-customGreen bg-opacity-[8%]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[55%] h-1/2">
        <h2 className="text-4xl font-bold text-center mb-4">Forgot Password</h2>
        <p className="text-customBlack text-center mb-6">
          Enter your registered email to receive a password reset OTP.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-100 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
              placeholder="Enter your email"
            />
          </div>
          <Button type="submit" title="Send OTP" className="!w-full" />
        </form>
      </div>
    </div>
  );
};

export default StartForgetPasswordPage;
