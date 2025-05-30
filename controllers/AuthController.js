const User = require("../models/User");
const jwt = require("jsonwebtoken");

//Token Generate
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

//Login
exports.signIn = async (req, res) => {
  console.log("req", req.body);
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User belum register" });
    } else {
      if (user.password !== password) {
        return res
          .status(401)
          .json({ message: "Email and password tidak di temukan" });
      }
    }

    res.json({
      _id: user._id,
      name: user.name,
      role: user.role,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
