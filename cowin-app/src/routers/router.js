const express=require("express")
const router=express.Router()
const { authentication, authorization } = require("../meddleware/auth");
const {createUser,userLogin,checkAvaliableDoes,registerSlotes}=require("../controller/userController")

const {adminLogin,findUserRegister}=require("../controller/adminController")
const {createSlotes}=require("../controller/vaccineController")

router.post("/register",createUser)
router.post("/login",userLogin)
router.get("/avaiableslote",checkAvaliableDoes)
router.post("/creatslote",registerSlotes)


router.post("/loginadmin",adminLogin)
router.post("/createSlotes",createSlotes)
router.get("/getRegisterSlotes",findUserRegister)
module.exports = router;



router.all("/**", function (req, res) {   
    res.status(404).send({
        status: false,
        msg: "The api you request is not available"
    })
});
