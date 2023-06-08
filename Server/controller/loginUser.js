import Users from "../Model/Users.js";

const loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await Users.findOne({email});
        if(!user){
            return res.status(400).json({message:"User is not exist."});
        }
        //matched  user's password with typed password
        if(user.password!==password){
            return res.status(400).json({message:"Invalid email or password"})
        }
        return res.status(200).json({message:"User successfully login",data:user})
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Server Error"});
    }
}
export default loginUser;