const express = require('express');
const router = express.Router();
const Info = require('../models/Info');

// post method to test on /api/info
router.post('/info', async(req, res) => {
    const itemIDs = ['fullName','contactNumber','fatherName','fatherNumber','dob','bloodGroup','checkInDate','email','occupation','workAddress','workNumber','permanentAddress','idProof','roomRent','securityDeposit','transactionId','signOfResident','signOfManager'];
    let values = {};
        itemIDs.map((item) => values[item] = req.body[item])
        console.log(values);

    await Info.create(values).then(response => res.status(200).send(response)).catch(err => res.status(400).json(err))
    
})

module.exports = router;