import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email is mandatory"],
        unique:[true,"Email must be unique"]
    },
    password:{
        type:String,
        required:true,
        minLength:[5,"Password is too small."]
    },
    username:String,
    fullName:String,
    phone:Number,
    avatar:{
        public_id:String,
        url:String
    },
    otp:{
        type:Number
    },
    expiry_otp:{
        type:Date,
        default:Date.now()+5*60*1000
    }
})
const Users = mongoose.model("Users",UserSchema);
export default Users;