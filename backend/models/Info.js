const mongoose = require('mongoose');
const {Schema} = mongoose;

const InfoSchema = new Schema({
    fullName:{
        type: String,
        required: true,
    },
    contactNumber:{
        type: Number,
        required: true,
    },
    fatherName:{
        type: String,
        required: true,
    },
    fatherNumber:{
        type: Number,
        required: true,
    },
    dob:{
        type: Date,
        required: true,
    },
    bloodGroup:{
        type: String,
        required: true,
    },
    checkInDate:{
        type: Date,
        default: Date().now,
    },
    email:{
        type: String,
        required: true,
    },
    occupation:{
        type: String,
        required: true,
    },
    workAddress:{
        type: String,
        required: true,
    },
    workNumber:{
        type: Number,
        required: true,
    },
    permanentAddress:{
        type: String,
        required: true,
    },
    idProof:{
        type: String,
        required: true,
    },
    roomRent:{
        type: Number,
        required: true,
    },
    securityDeposit:{
        type: Number,
        required: true,
    },
    transactionId:{
        type: String,
        required: true,
    },
    signOfResident:{
        type: String,
        required: true,
    },
    signOfManager:{
        type: String,
        required: true,
    },
});

const Info = mongoose.model('info', InfoSchema);
module.exports = Info;