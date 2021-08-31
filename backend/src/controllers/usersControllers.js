const userCtrl = {};
const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
};

userCtrl.createUser = async (req, res) => {
    const { userName } = req.body;
    const newUser = new User({ userName });
    await newUser.save();
    res.json('User created');
};

userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.paramas.id);
    res.json(user);
};

userCtrl.updateUser = async (req, res) => {
    const { userName } = req.body;
    await User.findOneAndUpdate(req.params.id,{ userName });
    res.json('User Update');
};

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json('User Deleted');
};

module.exports = userCtrl;
