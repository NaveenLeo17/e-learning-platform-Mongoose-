import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema({
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    category: {
        type: String,
        required: true,
        enum: ['Programming', 'Mathematics', 'Science', 'Arts', 'Business']
    },
    level: {
        type: String,
        required: true,
        enum: ['1', '2', '3']
    },
    popularity: {
        type: String,
        required: true,
        enum: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars']
    }
},
    { timestamps: true })

export const Course = mongoose.model("Course", courseSchema)