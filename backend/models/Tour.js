import mongoose from "mongoose";

const Tour = mongoose.Schema({
    name: {
        type: String
    },
    name_tour: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

export default mongoose.model('Tours', Tour);