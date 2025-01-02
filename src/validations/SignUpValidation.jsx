import * as Yup from "yup";

const SignUpValidation = Yup.object().shape({
  surname: Yup.string().required("Surname is required"),
  othernames: Yup.string().required("Othernames is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])/,
      "Password must include at least one special character and one number"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number must be numeric")
    .nullable(),
});

export default SignUpValidation;
