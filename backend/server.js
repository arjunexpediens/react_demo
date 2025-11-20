import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Arjun here!");
});

app.use(express.json());


app.use("/api/login", (req, res) => {
    // Placeholder for login route
    res.send("done!!!!!!!!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
