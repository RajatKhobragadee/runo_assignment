

const mongoose = require('mongoose')

const sloteSchema = new mongoose.Schema({
name:{type:String,require:true,trim:true},
gender:{type:String,require:true,trim:true},
mobile_number:{type:Number,require:true,trim:true},
vaccine:{type:String,require:true,trim:true},
dose1_date:{type:String,trim:true},
dose2_date:{type:String,trim:true},  

place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "slotes",
    required: true
},  


}, { timestamps: true });

module.exports = mongoose.model("does", sloteSchema)




