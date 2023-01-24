const User = require('./../models/User');
const saltRounds = 100;

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({users: users})
    } catch (error) {
        res.status(500).json({error: error})
    }

}

const addUsers = async (req, res, next) => {
    const { nom, prenom, email, password, role} = req.body;
    
}

const updateUser = async (req, res, next) => {
    const { nom, prenom, email, password, role} = req.body;
    
}

const deleteUser = async (req, res, next) => {
    const { nom, prenom, email, password, role} = req.body;
    
}

module.exports = {
    getUsers, addUsers,
    updateUser, deleteUser
}