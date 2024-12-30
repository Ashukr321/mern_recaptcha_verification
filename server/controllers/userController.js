import User from "../models/userModels.js";
import userValidationSchema from "../validator/userValidator.js";
import bcrypt from "bcryptjs";
// create user 
const createUser = async(req,res,next)=>{
  try {
    // validate user req body by joi schema 
    const {error} = userValidationSchema.validate(req.body);
    if(error){
      const err = new Error();
      err.status = 400;
      err.message = error.details[0].message;
      return next(err);
    }
    // create user
    const {name,email,password} = req.body;

    // hashed padding: 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    res.status(201).json({
      message: "User Created Successfully",
      user
    })
    
  } catch (error) {
    return next(error);
  }
}

export {
  createUser
}