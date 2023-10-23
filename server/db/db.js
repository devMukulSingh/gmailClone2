import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.URI;

const db = async() => {
try {
        await mongoose.connect( uri , { useNewUrlParser:true, useUnifiedTopology:true} );
        console.log(`Connection Successful to Database`);
} catch (error) {
    console.log(`Error in db ${error}`);
}   
}

export default db;