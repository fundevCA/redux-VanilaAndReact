const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect(
    "mongodb+srv://admin:abcd1234@blog.1r5f1.mongodb.net/mySecondDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      autoIndex: false
    }
  )
  .then(() => console.log("DB Connected!!"))
  .catch(err => console.log(err));

const db = mongoose.connection;

module.exports = db;
