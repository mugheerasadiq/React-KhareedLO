import React from "react";
import { Formik } from "formik";
import LoginFormSchema from "../Validations/Loginform.validation";

const Login = () => {
  return (
    <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
      <div className="container">
        <div className="row">
          <div className="container">
            <div className="row align-items-center justify-content-center contact-section">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={LoginFormSchema}
                onSubmit={(values) => {
                  console.log(values);
                  alert("SUCCESS!! :-)\n\n" + JSON.stringify(values));
                }}
              >
                {({
                  values,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  errors,
                  /* and other goodies */
                }) => (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white p-5 contact-form col-md-7 mb-5 mt-5"
                  >
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        onChange={handleChange}
                        name="email"
                        onBlur={handleBlur}
                        touched={touched}
                        value={values.email}
                        placeholder="Your Email"
                      />
                      {errors.email && touched.email ? (
                        <div className="text-danger">{errors.email}</div>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Your password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched}
                        value={values.password}
                      />
                      {errors.password && touched.password ? (
                        <div className="text-danger">{errors.password}</div>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary py-3 px-5"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
