import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
    From : {
        type : String,
        required : true
    },
    To : {
        type : String,
        required : true
    },
    Subject : {
        type : String,
    },
    Body : {
        type : String,
    },
    Type : {
        type : String,
        required : true
    },
    Bin : {
        type : Boolean,
        default : false,
    },
    Date : {
        type : Date,
        required : true
    },
    Starred: {
        type: Boolean,
        default : false,
    }
   
})

const emailModel = mongoose.model( "emailModel" , emailSchema);
export default emailModel;