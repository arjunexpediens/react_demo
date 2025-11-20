import query from "./db.js";


export const findUserByUsername = async (username) => {
    const res = await query("SELECT * FROM users WHERE username = ?", [username]);
    return res[0];
};