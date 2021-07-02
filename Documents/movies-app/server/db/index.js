const mongoose = require("mongoose");
const { Schema } = mongoose;

const ADDRESS = `mongodb+srv://admin:${process.env.DB_PASS}@blog.1r5f1.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(ADDRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false
  })
  .then(() => console.log("DB Connected!!"))
  .catch(err => console.log(err));

const db = mongoose.connection;

module.exports = db;
