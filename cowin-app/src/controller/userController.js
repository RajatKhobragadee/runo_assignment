const jwt = require('jsonwebtoken');
const slotesModel = require('../models/slotesModel');
const registerModel =require("../models/registerDose")

const userModel = require("../models/userModel")

///////////////////////////////////////////////////////////////////// CREATE USER /////////////////////////////////////////////////////////////////////////////////////////////

exports.createUser = async (req, res) => {

    try {

        let userData = req.body;  //Data storing in variable comming from request body

        const {  name, phoneNumber, age, pincode,aadharNumber,password} = userData //Destructuring data

        if (Object.keys(userData).length == 0) {   //checking is there any data is provided in request body or not
            return res.status(400).send({
                status: false,
                message: "Invalid request parameters. Please provide user details",
            });
        }
       
      

        // const isPhone = await userModel.findOne({ phoneNumber: phoneNumber });  

        // if (isPhone) {   //checking is there any similar phone no. is stored in DB or not
        //     res.status(400).send({ status: false, message: "Phone number already registered" });
        //     return;
        // }


        const saveUser = await userModel.create(userData)
        return res.status(201).send({ status: true, message: "User successfully created", data: saveUser })


    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
};

///////////////////////////////////////////////////////////////////// USER LOGIN /////////////////////////////////////////////////////////////////////////////////////////////

exports.userLogin = async (req, res) => {
    try {
        let data = req.body;
        
        if (Object.keys(req.body).length == 0) return res.status(400).send({ status: false, message: "Please enter data in  body" });

        let { phoneNumber, password } = data;  //Destructuring Data
       
        if (!phoneNumber) return res.status(400).send({ status: false, message: "Email ID is required" });

        if (!password) return res.status(400).send({ status: false, message: "Password is required" });

        
        let validUser = await userModel.findOne({ phoneNumber: phoneNumber, password: password });

        if (!validUser)  //checking user data is available or not    
            return res.status(401).send({
                status: false,
                message: "Invalid Login Credentials",
            });
            //Token generation using JWT
       let token = jwt.sign({ userId: validUser._id }, 'lama', { expiresIn: '6d' }); //generate jwt token at succesfull login 
        return res.status(200).send({ status: true, message: "Login Successfully", data: { token } });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}





exports.checkAvaliableDoes = async (req, res) => {
    try {
        let data = req.body;
        
        if (Object.keys(req.body).length == 0) return res.status(400).send({ status: false, message: "Please enter data in  body" });

        let { date } = data;  //Destructuring Data
       
        let check = await slotesModel.find({ date: date });

        if (!check)  //checking user data is available or not    
            return res.status(401).send({
                status: false,
                message: "slotes are  not avaliable",
            });

        return res.status(200).send({ status: true, message: "Available slotes", data: check  });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}





exports.registerSlotes = async (req, res) => {
   // try {
        let data = req.body;
        
        if (Object.keys(req.body).length == 0) return res.status(400).send({ status: false, message: "Please enter data in  body" });

        //let { available_capacity_dose1,available_capacity_dose2 } = data;  
       
        const saveUser = await registerModel.create(data)
        const members = await registerModel.findOne(saveUser).populate("slotes");
        0
        
        return res.status(201).send({ status: true, message: "Slote successfully registerd", data: members })

        
    } 


