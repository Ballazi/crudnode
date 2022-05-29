const app = require("./express");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("Started express server on port " + PORT));