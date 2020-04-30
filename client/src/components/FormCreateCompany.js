import React from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";

function FormCreateCompany({ values, handleChange }) {
  return (
    <div>
      <Form style={{ display: "flex", flexDirection: "column", padding: 30 }}>
        <Field type="text" name="name" placeholder="Company Name" />
        <Field type="text" name="address" placeholder="Company Address" />
        <Field type="text" name="revenue" placeholder="Company Revenue" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <label for="">Phone Company</label>
          <div>
            <Field type="text" name="phoneCode" placeholder="Phone Code" />
            <Field type="text" name="phoneNumber" placeholder="Phone Number" />
          </div>
        </div>
        <button>create</button>
      </Form>
    </div>
  );
}

const FormCompany = withFormik({
  mapPropsToValues({ name, address, revenue, phoneCode, phoneNumber }) {
    return {
      name: name || "",
      address: address || "",
      revenue: revenue || "",
      phoneNumber: phoneNumber || "",
      phoneCode: phoneCode || "",
    };
  },
  handleSubmit(values) {
    console.log(values);
  },
})(FormCreateCompany);
export default FormCompany;
