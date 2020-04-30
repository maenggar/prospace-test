import React from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import { graphql } from "react-apollo";
import { addCompany } from "../queries/Queries";

function FormCreateCompany(props) {
  const addCompanyMutation = () => {
    return props.mutate({
      variables: {
        name: props.values.name,
        address: props.values.address,
        revenue: props.values.revenue,
        PhoneCode: parseInt(props.values.PhoneCode),
        PhoneNumber: parseInt(props.values.PhoneNumber),
      },
    });
  };

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
            <Field type="text" name="PhoneCode" placeholder="Phone Code" />
            <Field type="text" name="PhoneNumber" placeholder="Phone Number" />
          </div>
        </div>
        <button type="submit" onClick={addCompanyMutation}>
          create
        </button>
      </Form>
    </div>
  );
}

const FormCompany = withFormik({
  mapPropsToValues({ name, address, revenue, PhoneCode, PhoneNumber }) {
    return {
      name: name || "",
      address: address || "",
      revenue: revenue || "",
      PhoneNumber: PhoneNumber || "",
      PhoneCode: PhoneCode || "",
    };
  },
  handleSubmit(values) {
    console.log(values);
  },
})(FormCreateCompany);
export default graphql(addCompany)(FormCompany);
