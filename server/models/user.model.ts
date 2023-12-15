import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    unique:true,
    required:true,
  },
  email:{
    type: String,
    unique:true,
    required:true,
  },
  password:{
    type: String,
    required:true,
  },
  avatar:{
    type:String,
    default:"https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" 
  }
},{timestamps:true});

const User = mongoose.model('User', userSchema);

export default User