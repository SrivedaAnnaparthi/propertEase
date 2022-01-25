import React, { useState } from 'react'
import { Grid, TextField, Button, InputLabel, FormControl } from '@mui/material'
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import { Select } from '@material-ui/core';
//import Payments from './Payment'



export default function Pay() {
    const url = ""
    const initialValues = {
        paymentType: "",
        paymentReason: "",
        paymentDate: "",
    };

    const [values, setValues] = useState(initialValues);
    const [type, setType] = React.useState('');
    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values, [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(url, {
            fullName: values.fullName,
            fatherName: values.fatherName
        })
            .then(res => {
                console.log(res.values)
            })
        console.log("InputFields", values);

        setValues({
            paymentType: "",
            paymentReason: "",
            paymentDate: "",

        });

    };
    const handleChange = (event) => {
        setType(event.target.value);
      };






    return (

        <form onSubmit={handleSubmit}>
            <h3>Payment Details</h3>
            <Grid container columnSpacing={1}  >
            <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Name"
                        type="string"
                        name="paymentReason"
                        value={values.contactNumber}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Building No"
                        type="string"
                        name="paymentReason"
                        value={values.contactNumber}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Room No"
                        type="string"
                        name="paymentReason"
                        value={values.contactNumber}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Bed No"
                        type="string"
                        name="paymentReason"
                        value={values.contactNumber}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Transaction Amount"
                        type="string"
                        name="paymentReason"
                        value={values.contactNumber}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Due Amount"
                        type="string"
                        name="paymentReason"
                        value={values.contactNumber}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6} >
                    <FormControl sx={{ m:2, minWidth: 200 }}>
                    <InputLabel name='paymentType'>Payment Type</InputLabel>
                    <Select 
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={type}
                    onChange={handleChange}>
                        <MenuItem value={'UPI'}>UPI</MenuItem>
                        <MenuItem value={'CASH'}>CASH</MenuItem>
                        <MenuItem value={'PAYTM'}>PAYTM</MenuItem>
                    </Select>
                    </FormControl>





                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Transaction ID"
                        type="string"
                        name="paymentReason"
                        value={values.contactNumber}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Transaction Amount"
                        type="string"
                        name="paymentReason"
                        value={values.contactNumber}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Payment Reason"
                        type="string"
                        name="paymentReason"
                        value={values.contactNumber}
                        onChange={handleInputChange} />
                </Grid>
                
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Day"
                        type="Number"

                        name="paymentDate"
                        value={values.paymentDate}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="Month"
                        type="String"

                        name="paymentDate"
                        value={values.paymentDate}
                        onChange={handleInputChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="standard"
                        label="year"
                        type="Number"

                        name="paymentDate"
                        value={values.paymentDate}
                        onChange={handleInputChange} />
                </Grid>











            </Grid>
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>

        </form>



    )
}