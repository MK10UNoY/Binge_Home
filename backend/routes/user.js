const express = require("express");
const {
  handleGetAllUsers,
  getUserById,
  handleCreateNewUser,
  handleUpdateUserById,
  handleDeleteUserById,
} = require("../controllers/user");

const router = express.Router();

// router.get("/users", async (req, res) => {
//     const AllDBUsers= await Users.find({});
//     const html = `
//       <ul>
//           ${AllDBUsers
//             .map(
//               (user) => `<li>${user.first_name} ${user.last_name}</li>
//                                <li>${user.gender}</li>
//                                <li>${user.email}</li><br><br>
//           `
//             )
//             .join("")}
//       </ul>
//       `;
//     res.send(html);
//   });

//REST APi Points

router
.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser);

router
  .route("/:id")
  .get(getUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

///////////////////////////////////////////

module.exports = router;
