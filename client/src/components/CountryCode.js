import React, { Fragment } from "react";
import MuiPhoneNumber from "material-ui-phone-number";
import { Box, InputAdornment } from "@material-ui/core";

function CountryCode(props) {
  return (
    <Fragment>
      <InputAdornment variant="outlined" position="end">
        <Box marginTop="4em">
          <MuiPhoneNumber
            defaultCountry={"us"}
            onChange={props.value.PhoneCode}
          />
        </Box>
      </InputAdornment>
    </Fragment>
  );
}
export default CountryCode;
