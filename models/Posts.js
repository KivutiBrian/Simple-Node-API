const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    created_at :{type:Date,default:Date()}
})

module.exports = mongoose.model('Posts', postSchema)