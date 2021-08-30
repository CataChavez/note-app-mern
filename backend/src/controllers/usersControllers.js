const userCtrl = {}

userCtrl.getUsers = (req, res) => res.json({ message: [] })
userCtrl.createUser = (req, res) => res.json({ message: 'POST Request' })
userCtrl.getUser = (req, res) => res.json({ "title": "idNumber" })
userCtrl.updateUser = (req, res) => res.json({ message: 'User Update' })
userCtrl.deleteUser = (req, res) => res.json({ message: 'Note Deleted' })

module.exports = userCtrl
