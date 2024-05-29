import mongoose, { Schema } from "mongoose";

const enrollmentSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course"
    },
    enrolledUser: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps })

export const Enrollment = mongoose.model("Enrollment", enrollmentSchema)