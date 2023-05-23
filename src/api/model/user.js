const mongoose = require('mongoose')
const Schema = require('mongoose').Schema;
const model = require('mongoose').model;

const user = new Schema({
    name:String,
    email:String
},{
    toJSON:{
        virtuals: true
    }, toObject:{
        virtuals: true
    }
});

module.exports = model('users', user);