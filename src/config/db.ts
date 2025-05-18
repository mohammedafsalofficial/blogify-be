import { Pool } from "pg";

export const pool = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT as string, 10),
  database: process.env.PG_DATABASE,
});

export const initDB = async () => {
  // Drop users table if it exists
  await pool.query(`DROP TABLE IF EXISTS users`);

  // Create users table
  await pool.query(`
    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      full_name VARCHAR(100) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )  
  `);

  console.log("Users table recreated");
};
