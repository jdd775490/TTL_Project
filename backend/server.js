const express = require("express");
const cors = require("cors");  
const fs = require("fs");

const app = express();          

app.use(cors());                
app.use(express.json());        

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = data.users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ success: true, role: user.role });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
