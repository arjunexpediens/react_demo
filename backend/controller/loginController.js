import findUserByUsername from "../model/login.js";

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await findUserByUsername(username);

        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // In a real application, you should hash and compare passwords securely
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // Successful login
        res.status(200).json({ message: "Login successful", user: { id: user.id, username: user.username } });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};