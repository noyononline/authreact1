const router = require("express").Router();
const {
  signup_controller,
  login_controller,
  logout_controller,
  verifyEmail_controller,
  forgotPassword_controller,
  resetPassword_controller,
  checkAuth,
} = require("../controllers/auth.controller");
const verifyToken = require("../middleware/verifyToken");

router.get("/check-auth", verifyToken, checkAuth);
router.post("/signup", signup_controller);

router.post("/login", login_controller);

router.post("/logout", logout_controller);

router.post("/verify-email", verifyEmail_controller);

router.post("/forgot-password", forgotPassword_controller);

router.post("/reset-password/:token", resetPassword_controller);

module.exports = router;
