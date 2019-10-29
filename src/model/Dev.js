const {Schema,model} = require('mongoose')

const DevSchema = new Schema({
    name:{
        type:String,
        required:true,
    },

},{
    timesTamps:true,
})

module.exports = model('Dev',DevSchema)