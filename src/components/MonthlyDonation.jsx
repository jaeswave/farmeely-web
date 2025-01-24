import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const MonthlyDonation = () => {
  const initialValues = {
    fullName: "",
    email: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    billingAddress: "",
    subscribeMonthly: false,
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    cardNumber: Yup.string()
      .length(16, "Card number must be 16 digits")
      .matches(/^[0-9]+$/, "Card number must be numeric")
      .required("Card number is required"),
    expDate: Yup.string()
      .matches(
        /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
        "Expiration date must be in MM/YY format"
      )
      .required("Expiration date is required"),
    cvv: Yup.string()
      .length(3, "CVV must be 3 digits")
      .matches(/^[0-9]+$/, "CVV must be numeric")
      .required("CVV is required"),
    billingAddress: Yup.string(),
    subscribeMonthly: Yup.boolean().required("Subscription choice is required"),
  });

  const handleSubmit = (values) => {
    // Handle form submission, e.g., call a payment API
    console.log(values);
  };

  return (
    <div className="m-10 p-6 bg-white rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">
        Monthly Donation Form
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name:
              </label>
              <Field
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number:
              </label>
              <Field
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="Enter your card number"
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
              />
              <ErrorMessage
                name="cardNumber"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="expDate"
                className="block text-sm font-medium text-gray-700"
              >
                Expiration Date (MM/YY):
              </label>
              <Field
                type="text"
                id="expDate"
                name="expDate"
                placeholder="Enter expiration date"
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
              />
              <ErrorMessage
                name="expDate"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700"
              >
                CVV:
              </label>
              <Field
                type="text"
                id="cvv"
                name="cvv"
                placeholder="Enter CVV"
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
              />
              <ErrorMessage
                name="cvv"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="billingAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Billing Address:
              </label>
              <Field
                type="text"
                id="billingAddress"
                name="billingAddress"
                placeholder="Enter your billing address"
                className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
              />
              <ErrorMessage
                name="billingAddress"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subscribeMonthly"
                className="inline-flex items-center text-sm text-gray-700"
              >
                <Field
                  type="checkbox"
                  id="subscribeMonthly"
                  name="subscribeMonthly"
                  className="mr-2"
                />
                Subscribe to Monthly Donations
              </label>
              <ErrorMessage
                name="subscribeMonthly"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MonthlyDonation;
