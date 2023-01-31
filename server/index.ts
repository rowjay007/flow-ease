import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
