const { USERMODEL } = require("../model/user.model");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let new_user = await USERMODEL.create({ name, email, password });
    await new_user.save();
    res.status(201).json({ success: true, message: "User created successfully", user: new_user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

const getUser = async (req, res) => {
  try {
    let data = await USERMODEL.find();
    return res.status(200).send({ success: true, data: data });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


const userLogin=async (req, res) => {
const {email, password}=req.body;
try{
let checkUser=await USERMODEL.findOne({email, password});
if(!checkUser){
    return res.status(401).json({ success: false, message: "User is not registered" });
}
res.status(200).json({ success: true, message: "User Login Successful", user: checkUser });
}catch (err) {
res.status(500).json({ success: false, message:"User Login Failed"})
}
}





module.exports = { getUser, createUser , userLogin};
