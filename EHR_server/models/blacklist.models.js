const mongoose = require("mongoose")

const blacklistSchema = mongoose.Schema({
    access_token:{
        type:String
    }
},{versionKey:false})

const BlacklistModel =  mongoose.model("BlackListToken",blacklistSchema)

module.exports = {BlacklistModel}