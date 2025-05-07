import User from '../model/User.js'
import { signupSchema, loginSchema } from '../validations/userSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()

export const login = async (req, res) => {
    try {
        // Validate login input
        const { error } = loginSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { email, password } = req.body;

        // Check if user exists
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(404).json({ error: "Email or Password is incorrect." });
        }

        // Compare password with hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, userExist.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Email or Password is incorrect." });
        }

        // Generate JWT token
        const token = jwt.sign(
            { username: userExist.username, id: userExist._id },
            process.env.SECRET_KEY,
            { expiresIn: '24h' }
        );

        // Send response with token
        res.status(200).json({
            success: true,
            message: "User login successful!",
            token,
        });

    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ error: "Internal server error." });
    }
};

export const signup = async (req, res) => {
    try {
        // Validate user input
        const { error } = signupSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { username, email, password } = req.body;

        // Check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: "Email already in use." });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ success: true, message: "User registered successfully!" });

    } catch (err) {
        console.error("Signup Error:", err);
        res.status(500).json({ error: "Internal server error." });
    }
};