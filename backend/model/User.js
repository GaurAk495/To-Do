import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, requried: true, unique: true },
    password: { type: String, required: true },
})

export default mongoose.model('user', userSchema)