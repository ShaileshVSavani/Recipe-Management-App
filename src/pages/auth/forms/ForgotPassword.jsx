import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Spinner from "../../../components/Spinner.jsx";
import API_BASE_URL from "../../../constant.js";
import { Form, Input, Button, message, Spin } from "antd";


const ForgotPassword = () => {
  const initialValues = { email: "" };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email()
      .matches(/^(?!.*@[^,]*,)/)
      .required("Email is required"),
  });

  const onSubmit = async (values) => {
    const btn = document.getElementById("sendEmailBtn");
    try {
      let res = await axios.post(
        `${API_BASE_URL}/api/v1/users/forgotPassword`,
        values
      );
      if (res.status === 201) {
        message.success("Password reset link has been sent to your mail");
        btn.disabled = true;
      }
    } catch (error) {
      message.error("Error Occurred please try after some time");
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-12 col-md-8 col-sm-10">
          <div className="bg-white rounded-3 p-4">
            <h1 className="text-center mb-4 text-dark">Forgot Password</h1>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <span className="text-danger">{formik.errors.email}</span>
              </div>
              <div className="d-grid mt-4">
                <button id="sendEmailBtn" type="submit" className="btn btn-warning">
                  <small>Send Email</small>
                </button>
              </div>
            </form>
            <div className="mt-3">
              <span>
                <small>You don't have an account?</small>
              </span>
              <Link
                className="link-primary text-decoration-underline"
                to="/auth/register"
              >
                <small>Register</small>
              </Link>
            </div>
            <div className="mt-3">
              <span className="text-muted">
                <small>Already have an account?</small>
                <Link
                  to="/auth/login"
                  className="link link-primary text-decoration-underline"
                >
                  <small>Login</small>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
