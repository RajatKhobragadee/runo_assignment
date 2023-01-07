const {parse, stringify} = require('flatted');
const adminModel=require("../models/adminModel")
const jwt = require('jsonwebtoken');
const slotesModel = require("../models/slotesModel");
const registerModel = require("../models/registerDose");

exports.adminLogin = async (req, res) => {
    try {
        let data = req.body;
        
        if (Object.keys(req.body).length == 0) return res.status(400).send({ status: false, message: "Please enter data in  body" });

        //let { name, password } = data;  //Destructuring Data
      
        
        let check = await slotesModel.findOne({ email: email, password: password });

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


exports.findUserRegister=async(req,res)=>{

    let check= await registerModel.find({})
  console.log(stringify(check))
 return res.status(200).send({ status: true, message: "Total  register slotes ", check});
}