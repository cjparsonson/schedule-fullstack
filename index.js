import pg from "pg";
import express from "express";
const app = express();
const port = 3000;
const { Pool } = pg;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432,
  idleTimeoutMillis: 300,
});

app.use((req, res, next) => {
  // Middleware to set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  next(); // Proceed to the next middleware or route handler
});

app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});

app.get("/api/employees", async (req, res) => {
  const resultDb = await pool.query("SELECT * FROM employee");
  const resultArray = resultDb.rows;
  res.json(resultArray);
});

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`);
});
