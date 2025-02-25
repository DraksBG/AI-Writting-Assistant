require("dotenv").config();
const express = require("express");
const cors = require("cors");

const analyzeRoute = require("./routes/analyze");
const grammarCheckRoute = require("./routes/grammarCheck");
const spellCheckRoute = require("./routes/spellCheck");

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
//https://api.openai.com/v1/chat/completions
// Routes

app.use("/api/analyze", analyzeRoute);
app.use("/api/grammarcheck", grammarCheckRoute);
app.use("/api/spellcheck", spellCheckRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
