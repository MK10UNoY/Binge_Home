const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
      first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      gender: {
        type: String,
      },
      jobTitle: {
        type: String,
      },
    },
    { timestamps: true }
  );
  const Users = mongoose.model("users", userSchema);

  module.exports=Users;