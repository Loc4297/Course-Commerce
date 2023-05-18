import mongoose, {Schema} from "mongoose"

export default mongoose.model(
    "Level",
    new Schema({
        name: {
            type: String,
            required: true,
        },
    })
)