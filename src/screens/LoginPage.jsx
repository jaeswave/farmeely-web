import { Formik, Form, Field, ErrorMessage } from "formik";
import LoginValidation from "../validations/LoginValidation";
import login from "../assets/images/login.png";
import Button from "../components/Button";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    const { email, password } = values;

    try {
      const response = await loginUser(email, password);
      console.log(response);
      if (response.data.success === true) {
        const { access_token } = response.headers;
        localStorage.setItem("token", access_token);
        toast.success(response.data.message);
        navigate("/dashboard");
      } else {
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      toast.error(error.message); 
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="px-3 h-screen">
      <div className="mx-auto ">
        <div className="grid lg:grid-cols-2 gap-6 ">
          <div className="hidden lg:block py-2 max-h-screen">
            <img
              className="w-full max-h-[100%] object-cover rounded-xl"
              src={login}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center w-full lg:w-[85%] mx-auto place-self-center px-5 py-5">
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
