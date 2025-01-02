import * as Yup from "yup";

const LoginValidation = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])/,
      "Password must include at least one special character and one number"
    )
    .required("Password is required"),
});

export default LoginValidation;
