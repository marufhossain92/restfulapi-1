const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api", {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log("Connection is established!");
}).catch((error) => {
    console.error("MongoDB connection failed:", error.message);
});



