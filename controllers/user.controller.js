import UserModel from "..//models/user.model.js";
import bcrypt from "bcryptjs";
import sendEmail from "../config/sendEmail.js";
import emailVerificationTemplate  from "../utils/emailVerificationTemplate.js";

return async function registerUserController(req,res){
    try{
        const{name,email,password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({
                message: "All fields are required",
                error: true,
                success: false
            });
        }

        const user = await UserModel.findOne({email});

        if(user){
            return res.json({
                message : "Email is already registered",
                error : true,
                success : false
            })
        }
 
         const salt =  await bcrypt.genSalt(10)
         const hashesPassword = await bcrypt.hash(password, salt)

         const payload = {
            name,
            email,
            password: hashesPassword
         }

         const newUser = new UserModel(payload);
         const save = await newUser.save();

         const emailVerifyUrl = `${process.env.FRONTEND_URL}/verify-email?code=${save._id}`;

         const emailVerification = await sendEmail({
            sendTo: email,
            subject: "Welcome to Sprightly - Verify Your Email Address",
            html: emailVerificationTemplate(
                {
                    name,
                    url: emailVerifyUrl
                }
            )
         });

         return res.json({
            message: "User registered successfully. Please verify your email.",
            error: false,
            success: true,
            data: save
         })

    }catch(error){
        return status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
};