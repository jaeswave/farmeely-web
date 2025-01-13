import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import signUpValidation from "../validations/signUpValidation";
import signup from "../assets/images/signup.png";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { createCustomerAccount } from "../redux/slices/customerSlice";
import { toast } from "react-toastify";
import { IS_VERIFY, IS_EXIST } from "../enums";

const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { isLoading } = useSelector((state) => state.customer);
  const initialValues = {
    surname: "",
    othernames: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  };

  // console.log(Urls.verifyEmail);

  const handleSubmit = async (values) => {
    const { email } = values;

    // Store email in localStorage
    localStorage.setItem("email", email);

    // Dispatch the createCustomerAccount action
    const result = await dispatch(createCustomerAccount(values));

    if (createCustomerAccount.rejected.match(result)) {
      console.log(result);
      const errorMessage =
        result.payload.message || "Something went wrong! Please try again.";
      if (result.payload.isVerify === IS_VERIFY) {
        toast.error(errorMessage);
        navigate("/verify-email");
      } else if (result.payload.isVerify === IS_EXIST) {
        toast.error(errorMessage);
        navigate("/login");
      } else {
        toast.error(errorMessage);
      }
      return;
    }

    if (createCustomerAccount.fulfilled.match(result)) {
      const customerData = result.payload;
      toast.success(
        customerData.message ||
          "Account created successfully. Please verify your account."
      );
      navigate("/verify-email");
    }
  };

  return (
    <section className="px-3 h-screen">
      <div className=" mx-auto">
        <div className="grid lg:grid-cols-2 gap-5 ">
          <div className="hidden lg:block max-h-screen py-2">
            <img
              className="w-full max-h-[100%] object-cover rounded-xl"
              src={signup}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-[70%] place-self-center mx-auto py-5 px-5">
            <h1 className="text-center text-4xl font-bold w-full">
              Create your account
            </h1>
            <p className="mb-2 text-center text-sm">
              Join MailMeQuran and stay connected with the Quran daily!
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={signUpValidation}
              onSubmit={handleSubmit}
            >
              {({ isLoading }) => (
                <Form className="space-y-4">
                  <div>
                    <label
                      htmlFor="surname"
                      className="block text-sm font-medium text-customBlack"
                    >
                      Surname
                    </label>
                    <Field
                      id="surname"
                      name="surname"
                      placeholder="Enter your surname"
                      className="bg-gray-200 mt-1 block p-1 h-8 w-full border-gray-300 rounded-sm shadow-sm focus:ring-blue focus:border-blue-100"
                    />
                    <ErrorMessage
                      name="surname"
                      component="div"
                      className="text-sm text-red-600 mt-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="othernames"
                      className="block text-sm font-medium text-customBlack"
                    >
                      Othernames
                    </label>
                    <Field
                      id="othernames"
                      name="othernames"
                      placeholder="Enter your othernames"
                      className="bg-gray-200 mt-1 block p-1 h-8 w-full border-gray-300 rounded-sm shadow-sm focus:ring-blue focus:border-blue-100"
                    />
                    <ErrorMessage
                      name="othernames"
                      component="div"
                      className="text-sm text-red-600 mt-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-gray-200 mt-1 block p-1 h-8 w-full border-gray-300 rounded-sm shadow-sm focus:ring-blue focus:border-blue-100"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-sm text-red-600 mt-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      className="bg-gray-200 mt-1 block p-1 h-8 w-full border-gray-300 rounded-sm shadow-sm focus:ring-blue focus:border-blue-100"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-sm text-red-600 mt-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <Field
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      className="bg-gray-200 mt-1 block p-1 h-8 w-full border-gray-300 rounded-sm shadow-sm focus:ring-blue focus:border-blue-100"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-sm text-red-600 mt-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number (Optional)
                    </label>
                    <Field
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="bg-gray-200 mt-1 block p-1 h-8 w-full border-gray-300 rounded-sm shadow-sm focus:ring-blue focus:border-blue-100"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-sm text-red-600 mt-1"
                    />
                  </div>
                  <div>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="!w-full"
                      title={isLoading ? "Submitting..." : "Sign Up"}
                    />
                  </div>
                </Form>
              )}
            </Formik>
            <p className="mt-4 text-sm text-center text-customBlack">
              Already have an account?{" "}
              <a href="/login" className="text-customGreen">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
