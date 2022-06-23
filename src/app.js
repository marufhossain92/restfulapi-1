const express = require("express");
require("./db/conn");
const router = require("./routers/student");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Connection is set up at port number: ${PORT}`);
})