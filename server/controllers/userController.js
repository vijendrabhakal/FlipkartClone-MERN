import User from "../models/user.js";

//signup

export const userSignup = async (req, res) => {
  try {
    const exist1 = await User.findOne({ username: req.body.username });
    if (exist1) {
      res.status(401).json({ message: "Username already exists" });
    }
    const exist2 = await User.findOne({ email: req.body.email });
    if (exist2) {
      res.status(401).json({ message: "Email already exists" });
    }
    const exist3 = await User.findOne({ phone: req.body.phone });
    if (exist3) {
      res.status(401).json({ message: "Phone number already exists" });
    }

    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    res.status(200).json({ message: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//login

export const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(401).json({ message: "user not found" });
    } else {
      const password = await User.findOne({ password: req.body.password });
      if (!password) {
        res.status(401).json({ message: "Invalid Credentials" });
      } else {
        res.status(200).json({ userdata: user });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
