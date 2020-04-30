import React from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";

function FormCreateOffice({ values, handleChange }) {
  return (
    <div>
      <Form style={{ display: "flex", flexDirection: "column", padding: 30 }}>
        <Field type="text" name="name" placeholder="Company Name" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <label for="">Location</label>
          <div>
            <Field type="text" name="latitude" placeholder="latitude" />
            <Field type="text" name="longtitude" placeholder="longtitude" />
          </div>
        </div>
        <Field type="text" name="date" placeholder="Company Start Date" />
        <Field as="select" name="color">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Field>
        <button>create</button>
      </Form>
    </div>
  );
}

const FormOffice = withFormik({
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
})(FormCreateOffice);
export default FormOffice;
