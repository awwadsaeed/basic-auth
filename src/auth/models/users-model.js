'use strict';
const mongoose = require('mongoose');
// Create a mongoose model
const usersSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const UsersModel = mongoose.model('users', usersSchema);

module.exports = UsersModel;