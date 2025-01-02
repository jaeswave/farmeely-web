import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoginValidation from "../validations/LoginValidation";
import login from "../assets/images/login.png";
import Button from "../components/Button";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log("Form Submitted:", values);
    alert("login successful");
    setSubmitting(false);
  };

  return (
    <section className="px-3">
      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-2 gap-5 py-2 ">
          <div className="hidden md:block">
            <img
              className="w-full h-auto object-cover rounded-xl"
              src={login}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center w-[90%] md:w-[90%] place-self-center">
            <h1 className="text-center text-5xl font-bold">
              Login into your account
            </h1>
            <p className="mb-10 text-center">
              Welcome back! Login to your account to continue
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={LoginValidation}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-customBlack"
                    >
                      Email
                    </label>
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-gray-200 mt-1 block p-1 h-10 w-full border-gray-300 rounded-sm shadow-sm focus:ring-blue focus:border-blue-100"
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
                      className="bg-gray-200 mt-1 block p-1 h-10 w-full border-gray-300 rounded-sm shadow-sm focus:ring-blue focus:border-blue-100"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-sm text-red-600 mt-1"
                    />
                  </div>
                  <div className="flex justify-end">
                    <a
                      href="/start-forgot-password"
                      className="text-sm text-customGreen"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="!w-full"
                      title={isSubmitting ? "Submitting..." : "Login"}
                    />
                  </div>
                </Form>
              )}
            </Formik>
            <p className="mt-4 text-sm text-center text-customBlack">
              Don{"'"}t have an account?{" "}
              <a href="/signup" className="text-customGreen">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
