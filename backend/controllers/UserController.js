import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from '../models/User.js'

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) return res.status(404).json({ message: "user does`t exits" });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "invalid credentials" });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}

export const signup = async (req, res) => {
    const { userName, email, password, confirmPassword, imageProfile } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "user already exits" });

        if (password !== confirmPassword) return res.status(400).json({ message: "passwords don`t match" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ name: `${userName}`, email, password: hashedPassword, imageProfile });

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' });

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}