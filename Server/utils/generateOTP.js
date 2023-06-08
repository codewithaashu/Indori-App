export const generateOTP = ()=>{
    const otp = Math.floor(Math.random() * 10000);
    return otp;
}