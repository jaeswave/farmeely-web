import * as Yup from "yup";

const signUpValidation = Yup.object().shape({
  surname: Yup.string().required("Surname is required"),
  othernames: Yup.string().required("Other names are required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=^\S+$).{6,}$/,
      "Password must include a special character and no spaces"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
  phone: Yup.string().nullable(),
});

export default signUpValidation;
