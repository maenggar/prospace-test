import React from "react";
import FormCompany from "../components/FormCreateCompany";
import FormOffice from "../components/FormCreateOffice";

function OverViewPage() {
  return (
    <div style={{ display: "flex" }}>
      <FormCompany />
      <FormOffice />
    </div>
  );
}
export default OverViewPage;
