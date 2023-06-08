import Users from "../Model/Users.js";
import { generateOTP } from "../utils/generateOTP.js";

const registerUser = async(req,res)=>{
    try{
        const {email,password} = req.body;
        let user = await Users.findOne({email});
        if(user){
            return res.status(400).json({message:"User Already exists."});
        } 
        //generate otp
        const otp = generateOTP();
        //generate token
        
        user = await Users.create({
            email,
            password,
            otp
        })
        return res.status(200).json({message:"User successfully register",data:user});
    }catch(err){
        console.log("Error :",err);
        res.status(500).json({message:"Server Error"});
    }
}
export default registerUser;