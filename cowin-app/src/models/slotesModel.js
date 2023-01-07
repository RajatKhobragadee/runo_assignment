

const mongoose = require('mongoose')

const sloteSchema = new mongoose.Schema({
center_id: { type: Number, required: true ,trim:true},
name: { type: String, required: true ,trim:true},
address: { type: String, required: true ,trim:true},
state_name: { type: String, required: true ,trim:true},
district_name: { type: String, required: true ,trim:true},
block_name: { type: String, required: true ,trim:true},
pincode: { type: Number, required: true ,trim:true},
fee_type: { type: String, required: true ,enum:["Free", "Paid"],trim:true},
date: { type: String, required: true ,trim:true},
available_capacity: { type: Number, required: true ,trim:true},
available_capacity_dose1: { type: Number, required: true ,trim:true},
available_capacity_dose2: { type: Number, required: true ,trim:true},
vaccine: { type:String , required: true ,trim:true},
slots: { type:String , required: true,enum:["Morning", "Afternoon","Evening"] ,trim:true},

        


}, { timestamps: true });

module.exports = mongoose.model("slotes", sloteSchema)




