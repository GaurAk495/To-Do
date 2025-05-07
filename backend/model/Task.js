import mongoose from 'mongoose'

const { Schema } = mongoose

const todoSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    taskname: { type: String, required: true },
    taskdate: { type: String, required: true },
    completed: Boolean,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.model('todo', todoSchema)