import { useState } from "react";
import Button from "../components/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startForgetPassword } from "../redux/slices/forgetPasswordSlice";

const StartForgetPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const { isLoading } = useSelector((state) => state.forgetPassword);

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);

    const result = await dispatch(startForgetPassword(email)).unwrap();
    if (result.status === "failed") {
      toast.error(result.message || "Something went wrong,Please try again");
      return;
    }
    if (result.status === "success") {
      toast.success(
        result.message ||
          "kindly verify with the otp send to your email address"
      );
      navigate("/complete-forget-password");
      return;
    }
    toast.error(result.message);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-customGreen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[55%] ">
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
          <div className="mb-6">
            <Button type="submit" title={isLoading ? "Submitting..." : "Send OTP"} className="!w-full" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default StartForgetPasswordPage;
