const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
        name: { type: String, required: true ,trim:true},
        phoneNumber: { type: Number, required: true ,trim:true},
        password: { type: String, required: true ,trim:true},
        age: { type: Number, required: true, trim:true },
        pincode:{type:String,required:true,trim:true},
        aadharNumber: { type: Number, required: true ,trim:true},
       
        


}, { timestamps: true });

module.exports = mongoose.model("User", userSchema)