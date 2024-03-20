const { default: mongoose } = require("mongoose");
const monggose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("データベースと接続中・・・"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
