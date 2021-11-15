import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

    id: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    imageProfile: {
        type: String
    }


});

export default mongoose.model('User', UserSchema);