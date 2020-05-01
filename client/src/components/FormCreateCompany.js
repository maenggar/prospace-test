import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
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
        <div>
          {props.touched.name && props.errors.name && (
            <p>{props.errors.name}</p>
          )}
          <Field type="text" name="name" placeholder="Company Name" />
        </div>
        <div>
          {props.touched.address && props.errors.address && (
            <p>{props.errors.address}</p>
          )}
          <Field type="text" name="address" placeholder="Company Address" />
        </div>
        <div>
          {props.touched.revenue && props.errors.revenue && (
            <p>{props.errors.revenue}</p>
          )}
          <Field type="text" name="revenue" placeholder="Company Revenue" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <label for="">Phone Company</label>
          <div>
            <div>
              {props.touched.PhoneCode && props.errors.PhoneCode && (
                <p>{props.errors.PhoneCode}</p>
              )}
              <Field type="text" name="PhoneCode" placeholder="Phone Code" />
            </div>
            <div>
              {props.touched.PhoneNumber && props.errors.PhoneNumber && (
                <p>{props.errors.PhoneNumber}</p>
              )}
              <Field
                type="text"
                name="PhoneNumber"
                placeholder="Phone Number"
              />
            </div>
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
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Company Name must be requiered"),
    address: Yup.string().required("Company Address must be required"),
    revenue: Yup.string().required("Revenue must be required"),
    PhoneNumber: Yup.number()
      .min(9, "at least 9 character")
      .required("Phone Number must be requiered"),
    PhoneCode: Yup.number()
      .min(2, "at least 2 character")
      .required("Phone Code must be requiered"),
  }),
  handleSubmit(values) {
    console.log(values);
  },
})(FormCreateCompany);
export default graphql(addCompany)(FormCompany);
