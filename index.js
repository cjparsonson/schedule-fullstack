import pg from "pg";
import express from "express";
const app = express();
const port = 3000;
const { Pool } = pg;

app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.get("/api/employees", async (req, res) => {
  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: 5432,
    idleTimeoutMillis: 300,
  });
  const result = await pool.query("SELECT * FROM employee");
  res.json(result.rows);
  await pool.end();
});

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`);
});
