import { Formik, Form, Field } from "formik";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import Button from "../components/Button";
import completePasswordValidation from "../validations/completePasswordValidation";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { completeForgetPassword } from "../redux/slices/forgetPasswordSlice";

const CompleteForgetPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.forgetPassword);

  const initialValues = {
    otp: "",
    newPassword: "",
    confirmPassword: "",
  };

  const renderInput = (props) => (
    <input
      {...props}
      className="!w-[20px] sm:!w-[40px] md:!w-[70px] h-[70px] text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customGreen"
    />
  );

  const handleSubmit = async (values) => {
    const email = localStorage.getItem("email");
    const data = {
      email: email,
      otp: values.otp,
      newPassword: values.newPassword,
      repeatPassword: values.confirmPassword,
    };

    const result = await dispatch(completeForgetPassword(data)).unwrap();
    console.log("--------------", result);
    if (result.status === "failed") {
      toast.error(result.message || "Something went wrong! Please try again.");
      window.location.reload();
      return;
    }
    if (result.status === "success") {
      toast.success(result.message);
      localStorage.removeItem("email");
      navigate("/login");
    }
    toast.error(result.message || "Something went wrong! Please try again.");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-customGreen">
      <div className="bg-white p-8 rounded-lg shadow-lg mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">Reset Password</h2>
        <p className="text-customBlack text-center mb-6">
          Enter the OTP sent to your email and set a new password.
        </p>
        <Formik
          initialValues={initialValues}
          validationSchema={completePasswordValidation}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form className="space-y-4">
              <div className="flex justify-center mb-4">
                <OtpInput
                  value={values.otp}
                  onChange={(otp) => setFieldValue("otp", otp)}
                  numInputs={6}
                  isInputNum
                  separator={<span className="mx-4">-</span>}
                  renderInput={renderInput}
                  containerStyle="flex justify-between space-x-4"
                />
                {errors.otp && touched.otp && (
                  <p className="text-red-500 text-sm mt-1">{errors.otp}</p>
                )}
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-gray-700">
                  New Password
                </label>
                <Field
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
                  placeholder="Enter new password"
                />
                {errors.newPassword && touched.newPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.newPassword}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700"
                >
                  Confirm Password
                </label>
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen"
                  placeholder="Confirm new password"
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                title={isLoading ? "Submitting..." : "Reset Password"}
                className="!w-full"
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CompleteForgetPasswordPage;
