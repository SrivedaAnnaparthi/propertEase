const express = require('express');
const router = express.Router();
const app = express.Router();

const Info = require('../models/Info');

// post method to test on /api/info
router.post('/', async (req, res) => {
    const itemIDs = ['fullName', 'contactNumber', 'fatherName', 'fatherNumber', 'dob', 'bloodGroup', 'checkInDate', 'email', 'occupation', 'workAddress', 'workNumber', 'permanentAddress', 'idProof', 'roomRent', 'securityDeposit', 'transactionId', 'signOfResident', 'signOfManager'];
    let values = {};
    itemIDs.map((item) => values[item] = req.body[item])
    console.log(values);

    await Info.create(values).then(response => res.status(200).send(response)).catch(err => res.status(400).json(err))

})
// get back all the posts
router.get('/',  (req, res) => {
     Info.find({})
        .then((data) => {
            console.log('Data: ', data)
            res.json(data)
        })
        .catch((error) => {
            console.log('error: ', dataerror)
        })
})

module.exports = router;