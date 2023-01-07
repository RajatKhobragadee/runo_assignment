const sloteModel=require("../models/slotesModel")
exports.createSlotes = async (req, res) => {

    try {

        let userData = req.body;  //Data storing in variable comming from request body

       // const {  name, phoneNumber, age, pincode,aadharNumber,password} = userData //Destructuring data

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


        const saveUser = await sloteModel.create(userData)
        return res.status(201).send({ status: true, message: "slotes successfully created", data: saveUser })


    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
};