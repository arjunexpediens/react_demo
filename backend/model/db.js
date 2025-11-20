import pg from "pg";
import pg from "mysql2"


const { Pool } = pg;

const pool = new Pool({
    db_host: "localhost",
    db_user: "your_username",
    db_password: "your_password",
    db_name: "your_database",
    db_port: 5432, // Default port for PostgreSQL
});



export const query = async (text, params) => {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log("executed query", { text, duration, rows: res.rowCount });
    return res;
};