import React from "react";
import { Formik } from "formik";
import SignUpFormSchema from "../Validations/SignUpForm.validation";

const SignUp = () => {
  return (
    <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
      <div className="container">
        <div className="row">
          <div className="container">
            <div className="row align-items-center justify-content-center contact-section">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  address: "",
                  city: "",
                  country: "",
                  sex: "male",
                }}
                validationSchema={SignUpFormSchema}
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
                        name="name"
                        className="form-control "
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched}
                        value={values.name}
                        placeholder="Your Name"
                      />
                      {errors.name && touched.name ? (
                        <div className="text-danger">{errors.name}</div>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <input
                        name="password"
                        className="form-control "
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched}
                        value={values.password}
                        placeholder="Password"
                      />
                      {errors.password && touched.password ? (
                        <div className="text-danger">{errors.password}</div>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched}
                        value={values.email}
                      />
                      {errors.email && touched.email ? (
                        <div className="text-danger">{errors.email}</div>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <select
                        name="sex"
                        id="sex"
                        className="form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched}
                        value={values.sex}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        name="address"
                        className="form-control"
                        placeholder="Your Address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched}
                        value={values.address}
                      />
                      {errors.address && touched.address ? (
                        <div className="text-danger">{errors.address}</div>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <input
                        name="city"
                        className="form-control"
                        placeholder="City"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched}
                        value={values.city}
                      />
                      {errors.city && touched.city ? (
                        <div className="text-danger">{errors.city}</div>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <input
                        name="country"
                        className="form-control"
                        placeholder="Country"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched}
                        value={values.country}
                      />
                      {errors.country && touched.country ? (
                        <div className="text-danger">{errors.country}</div>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary py-3 px-5"
                      >
                        Sign up
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

export default SignUp;
