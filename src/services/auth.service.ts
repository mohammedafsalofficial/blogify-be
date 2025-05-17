import { pool } from "@/config/db";
import { UserPayload } from "@/types/auth.types";
import bcrypt, { genSalt } from "bcrypt";

export const registerUserService = async (userPayload: UserPayload) => {
  const { fullName, email } = userPayload;
  const salt = await genSalt();
  const hashedPassword = await bcrypt.hash(userPayload.password, salt);

  const query = `
    INSERT INTO users(full_name, email, password_hash)
    VALUES ($1, $2, $3)
    RETURNING id, full_name, email, created_at
  `;
  const values = [fullName, email, hashedPassword];

  const result = await pool.query(query, values);
  const user = result.rows[0];

  return {
    id: user.id,
    fullName: user.full_name,
    email: user.email,
  };
};
