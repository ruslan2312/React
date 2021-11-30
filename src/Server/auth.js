const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthSchema = new Schema({
  id: Number,
  email: String,
  password: String,
  authStatus: Boolean
});


const Auth = mongoose.model("auth", AuthSchema);

module.exports = Auth;
