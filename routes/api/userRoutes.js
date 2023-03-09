const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);
router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);
router.route("/:userId/friends/:friendId").put(addFriend).delete(deleteFriend);

module.exports = router;
