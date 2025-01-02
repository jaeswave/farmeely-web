import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import signUpValidation from "../validations/SignUpValidation";
import signup from "../assets/images/signup.png";
import Button from "../components/Button";

const SignUpUpPage = () => {
  const initialValues = {
    surname: "",
    othernames: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "", // Optional
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log("Form Submitted:", values);
    alert("An OTP has been sent to your email!");
    setSubmitting(false);
  };

  return (
    <section className="px-3">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-5 py-2 ">
          <div className="hidden md:block">
            <img
              className="w-full h-auto object-cover rounded-xl"
              src={signup}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center w-[90%] md:w-[90%] place-self-center">
            <h1 className="text-center text-5xl font-bold w-full">
              Create your account
            </h1>
            <p className="mb-10 text-center">
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
                      title={isSubmitting ? "Submitting..." : "Sign Up"}
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

export default SignUpUpPage;
