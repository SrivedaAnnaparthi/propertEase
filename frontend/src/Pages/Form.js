import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import axios from "axios";

export default function Form() {
  const itemIDs = ['fullName', 'contactNumber', 'fatherName', 'fatherNumber', 'dob', 'bloodGroup', 'checkInDate', 'email', 'occupation', 'workAddress', 'workNumber', 'permanentAddress', 'idProof', 'roomRent', 'securityDeposit', 'transactionId', 'signOfResident', 'signOfManager'];
  const [idFile, setIdFile] = useState("");

  const genericValue = (id) => {
    if (id === "idProof") {
      return idFile;
    }
    const item = document.getElementById(id);
    console.log(item.value);
    return item.value;
  };

  const genericReset = (id) => {
    if (id === 'idProof') {
      setIdFile('');
    } else {
      document.getElementById(id).value = '';
    }
  }

  const getFile = (file) => {
    if (file.type.indexOf("image") !== -1) {
      setIdFile(file.name);
    } else {
      alert("Only Image file is allowed for ID Proof!");
      setIdFile("");
    }
  };

  const handleSubmit = async () => {
    const url = "/api/info";

    let body = {};
    itemIDs.map((item) => {
      if (item === "checkInDate" && genericValue(item) === "") {
        return null
      } 
      else {
        return (
          body[item] = genericValue(item)
        );
      }
    });
    const headers = {
      "content-type": "application/json",
    };
    console.log('body', body);
    await axios
      .post(url, body, { headers })
      .then((res) => {
        console.log(res)
        itemIDs.map((item) => genericReset(item))
      })
      .catch((err) => console.log(err));
  };
  return (
    <form>
      <h3>Admission Form</h3>
      <Grid container rowSpacing={1}>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            name="fullname"
            label="Full Name"
            id="fullName"
          />
        </Grid>
        <Grid  item xs={6}>
          <TextField
            variant="standard"
            label="ContactNumber"
            type="number"
            name="contactNumber"
            id="contactNumber"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            label="FatherName"
            name="fatherName"
            id="fatherName"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            label="Contact Number"
            name="fatherNumber"
            type="number"
            id="fatherNumber"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            helperText="Date of Birth"
            type="date"
            name="dob"
            id="dob"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            label="Blood Group"
            name="bloodGroup"
            id="bloodGroup"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            name="checkInDate"
            helperText="Check In Date"
            type="date"
            id="checkInDate"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField variant="standard" label="Email" name="email" id="email" />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            label="Occupation"
            name="occupation"
            id="occupation"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            label="Work Address"
            name="workAddrress"
            id="workAddress"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            type="number"
            label="Work Number"
            name="workNumber"
            id="workNumber"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            label="Permanent Address"
            name="permanentAddress"
            id="permanentAddress"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            margin="normal"
            type="file"
            inputProps={{ style: { fontSize: 10 } }}
            name="idProof"
            id="idProof"
            onChange={(e) => getFile(e.target.files[0])}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            label="Room rent"
            type="number"
            name="roomRent"
            id="roomRent"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            label="Security Deposit"
            type="number"
            name="securityDeposit"
            id="securityDeposit"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            label="Transaction ID"
            name="transactionId"
            id="transactionId"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            label="Sign of Resident"
            name="signOfResident"
            id="signOfResident"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            label="Sign of Manager"
            name="signofManager"
            id="signOfManager"
          />
        </Grid>
      </Grid>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
}
