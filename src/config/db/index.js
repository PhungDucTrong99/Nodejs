const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/CRUD", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
    } catch (error) {
        console.log("connect fails");
    }
}
module.exports = { connect };
