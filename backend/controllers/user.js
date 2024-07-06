const Users = require("../models/user");
const { all } = require("../routes/user");

async function handleGetAllUsers(req, res) {
  const allDBUsers = await Users.find({});
  return res.json(allDBUsers);
}
async function getUserById(req, res) {
  const user = await Users.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "user not found" });
  return res.send(user);
}
async function handleCreateNewUser(req, res) {
  const body = req.body;
  // console.log(body, body.first_name);
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields required" });
  }
  const result = await Users.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  console.log("result:", result);

  return res.status(201).json({ msg: "success" });
}

async function handleUpdateUserById(req, res) {
  await Users.findByIdAndUpdate(req.params.id, { last_name: "Singh" });
  return res.json({ status: "Patch successful" });
}
async function handleDeleteUserById(req, res) {
  await Users.findByIdAndDelete(req.params.id);
  // TODO :Delete user with id
  return res.json({ status: "Delete Successful" });
}

module.exports = {
  handleGetAllUsers,
  getUserById,
  handleCreateNewUser,
  handleUpdateUserById,
  handleDeleteUserById,
};
