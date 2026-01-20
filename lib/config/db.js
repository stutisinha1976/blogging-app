import mongoose from "mongoose";

export const ConnectDB=async()=>{
    await mongoose.connect('mongodb+srv://stutisinha712_db_user:ZlEXmJ2wmmQUPc9V@cluster0.mongodb.net/blog-app');
    console.log("DB Connected");
}