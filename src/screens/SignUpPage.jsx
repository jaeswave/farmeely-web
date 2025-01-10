import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import signUpValidation from "../validations/signUpValidation";

import signup from "../assets/images/signup.png";
import Button from "../components/Button";
import { useDispatch, useSelector }  from "react-redux"
import customerSlice  from "../redux/slices/customerSlice"
import { toast } from "react-toastify";
import { IS_VERIFY } from "../enums";


const SignUpPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { customer, isLoading, error, response } = useSelector((state) => state.customer)

  console.log("customer", customer)

  const initialValues = {
    surname: "",
    othernames: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  };

 

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    const { email } = values;
    localStorage.setItem("email", email);

    dispatch(customerSlice.createCustomerAccount(values))
    if(error){
       toast.error(error || "Something went wrong! Please try again.");
       return 
    }
    if(customer.isVerify == IS_VERIFY) {
      toast.success(customer.message || "Kidly verify your email");
      navigate("/verify-email")
    }

      toast.success(customer.message || "Account created successfully");
      navigate("/")
      



    // console.log(values);



    // try {
    //   const data = await createCustomer(values);
    //   console.log(data);

    //   localStorage.setItem("email", email);

    //   if (data.success === true) {
    //     toast.success(data.message);

    //     resetForm();

    //     setTimeout(() => {
    //       navigate("/verify-email");
    //     }, 2000);
    //   }
    // } catch (error) {
    //   if (error.isVerify) {
    //     localStorage.setItem("email", email);

    //     toast.error(error.message);
    //     setTimeout(() => {
    //       navigate("/verify-email");
    //     }, 3000);
    //   } else {
    //     toast.error(error.message || "Something went wrong!");
    //   }
    // } finally {
    //   setSubmitting(false);
    // }
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
          <div className="flex flex-col justify-center w-full md:w-[85%] place-self-center mx-auto py-5 px-5">
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
              {({ isSubmitting }) => (
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
                      disabled={isSubmitting}
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
