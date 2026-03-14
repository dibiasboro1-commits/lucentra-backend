const toolRoutes = require("./routes/tools");
const express = require("express");
const cors = require("cors");
const aiToolsRoutes = require("./routes/aitools");

require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/tools", toolRoutes);
app.use("/api/ai", aiToolsRoutes);

app.get("/", (req, res) => {
  res.send("Lucentra Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});