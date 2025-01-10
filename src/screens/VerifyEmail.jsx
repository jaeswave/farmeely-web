import { useState } from "react";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import { submitOtp } from "../api";
import { resendOtp } from "../api";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const renderInput = (props) => (
    <input
      {...props}
      className="!w-[70px] h-[70px] text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customGreen"
    />
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem("email");
    if (!email) {
      toast.error("Something went wrong! Please try again.");
      return;
    }

    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      const response = await submitOtp(email, otp);

      console.log("Response:", response);

      if (response.status === true) {
        toast.success(response.message);
        setTimeout(() => navigate("/login"), 3000);
      } else {
        toast.error(response);
        window.location.reload();
      }
    } catch (error) {
      toast.error(error || "Something went wrong! Please try again.");
    }
  };

  const handleResendOtp = async () => {
    const email = localStorage.getItem("email");
    if (!email) {
      toast.error("Something went wrong! Please try again.");
      return;
    }
    try {
      const response = await resendOtp(email);
      if (response.success === true) {
        toast.success(response.message);
        setTimeout(() => window.location.reload(), 2000);
      } else {
        toast.error(response);
      }
    } catch (error) {
      toast.error(error || "Something went wrong! Please try again.");
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
          <div className="flex justify-center mb-4">
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
              title="Verify OTP"
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
