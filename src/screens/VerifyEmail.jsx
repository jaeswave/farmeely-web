import { useState } from "react";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { verifyCustomer, resendOtp } from "../redux/slices/verifyEmailSlice";

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.otp);
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const renderInput = (props) => (
    <input
      {...props}
      className="!w-[20px] sm:!w-[40px] md:!w-[70px] h-[70px] text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customGreen"
    />
  );

  const email = localStorage.getItem("email");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, otp);
    const result = await dispatch(verifyCustomer({ email, otp })).unwrap();
    console.log(result);
    if (result.status === "failed") {
      toast.error(result.message || "Something went wrong! Please try again.");
      return;
    }

    if (result.status === "success") {
      toast.success(result.message);
      localStorage.removeItem("email");
      navigate("/login");
      return;
    }

    toast.error(result || "Something went wrong! Please try again.");
  };

  const handleResendOtp = async () => {
    const result = await dispatch(resendOtp(email)).unwrap();
    
    if (result.status === "failed") {
      toast.error(result.message || "Something went wrong! Please try again.");
      return;
    }
    if (result.status === "success") {
      toast.success(result.message);
      window.location.reload();
    }
  };

  return (
    <section className="flex justify-center items-center h-screen bg-customGreen bg-opacity-[40%] p-4">
      <div className="bg-white px-8 rounded-lg shadow-lg w-full lg:w-[50%] mx-auto py-6">
        <h1 className="text-4xl font-bold text-center mb-4">
          Verify Your Email
        </h1>
        <p className="text-sm text-center text-customBlack mb-6">
          We’ve sent a one-time password (OTP) to your email address. Please
          enter the OTP below to verify your account.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center mb-4 mx-auto">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              isInputNum
              separator={<span className="mx-4">-</span>}
              renderInput={renderInput}
              containerStyle="flex justify-between space-x-4"
            />
          </div>
          <div className="flex flex-col items-center mt-6">
            <Button
              type="submit"
              title={isLoading ? "Verifying..." : "Verify"}
              className="!w-full mb-4 !text-lg !font-bold"
            />
            <p className="text-center text-1xl text-customBlack mt-4">
              Didn’t receive the OTP?{" "}
              <span
                className="text-1xl text-customGreen underline cursor-pointer"
                onClick={handleResendOtp}
              >
                Resend OTP
              </span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default VerifyEmail;
