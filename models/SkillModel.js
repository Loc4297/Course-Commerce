import mongoose, {Schema} from "mongoose"

export default mongoose.model(
    "Skill",
    new Schema({
        name: {
            type: String,
            required: true,
        },
    })
)